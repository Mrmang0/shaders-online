import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI, GUIController } from 'dat-gui'
import { Clock, Vector3 } from 'three';
import { default_frag, default_vertex } from 'src/app/app-monaco-editor/app-monaco-editor.component';
import { UniformState } from 'src/app/types/uniforms';
import { Observable } from 'rxjs';

type Uniform = {
  value: any
  type?: any
}

type Uniforms = {
  [key: string]: Uniform;
}

@Component({
  selector: 'app-three-scene',
  templateUrl: './app-three-scene.component.html',
  styleUrls: ['./app-three-scene.component.scss']
})
export class AppThreeSceneComponent implements OnInit, OnChanges {

  @ViewChild('canvas')
  private canvasRef: ElementRef | undefined;

  @Input() public fragmentShader: string = default_frag;
  @Input() public vertexShader: string = default_vertex;
  @Input() public rotationSpeedX: number = 0.05;
  @Input() public rotationSpeedY: number = 0.01;
  @Input() public size: number = 200;
  @Input() public height: number = 500;
  @Input() public width: number = 500;
  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;

  @Input() public customUniforms: UniformState | null = null;

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement;
  }



  private loader = new THREE.TextureLoader();
  private geometry = new THREE.PlaneGeometry(10, 10, 10);
  // private material = new THREE.MeshBasicMaterial({ map: this.loader.load(this.texture) });
  private clock: Clock = new Clock(true);

  private uniforms: Uniforms = {
    resolution: { value: new THREE.Vector2(this.width, this.height) },
    time: { value: this.clock.elapsedTime }
  }

  private additionalUniforms: Uniforms = {};

  private shaderMaterial = new THREE.ShaderMaterial({
    uniforms: { ...this.uniforms, ...this.additionalUniforms },
    vertexShader: this.vertexShader,
    fragmentShader: this.fragmentShader
  });

  private plane: THREE.Mesh = new THREE.Mesh(this.geometry, this.shaderMaterial);

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;

  private raycaster: THREE.Raycaster = new THREE.Raycaster();

  /**
   *Animate the cube
   *
   * @private
   * @memberof CubeComponent
   */
  private animateCube() {
    this.plane.rotation.x += this.rotationSpeedX;
    this.plane.rotation.y += this.rotationSpeedY;
  }

  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  private createScene() {
    //* Scene

    this.shaderMaterial.uniforms["resoulution"] = { value: new THREE.Vector2(this.width, this.height) };
    this.shaderMaterial.needsUpdate = true;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000)
    this.scene.add(this.plane);
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
 * Start the rendering loop
 *
 * @private
 * @memberof AppThreeSceneComponent
 */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.camera.position.z = this.cameraZ;
    controls.update();

    // const gui = new GUI()
    // const cameraFolder = gui.addFolder('Camera')
    // cameraFolder.add(this.camera.position, 'z', 0, 1000)
    // cameraFolder.open()

    let component: AppThreeSceneComponent = this;
    (function render() {
      requestAnimationFrame(render);
      (component.shaderMaterial.uniforms as any).time.value = component.clock.getElapsedTime();
      component.shaderMaterial.needsUpdate = true;
      component.renderer.render(component.scene, component.camera);

    }());
  }

  private addMouse() {
    const pointer = new THREE.Vector2();
    let component = this;
    function onPointerMove(event: PointerEvent) {
      pointer.x = event.clientX;
      pointer.y = - event.clientY;
      component.uniforms['mouse'] = { value: pointer };
      // console.log(component.shaderMaterial.uniforms);
    }

    this.canvas.addEventListener('pointermove', onPointerMove);
    this.raycaster.setFromCamera(pointer, this.camera);
  }



  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["fragmentShader"]?.currentValue) {
      this.shaderMaterial.fragmentShader = changes["fragmentShader"].currentValue;
      this.shaderMaterial.needsUpdate = true;
      this.clock.stop();
      this.clock.start();
    }

    if (changes["vertexShader"]?.currentValue) {
      this.shaderMaterial.vertexShader = changes["vertexShader"].currentValue;
      this.shaderMaterial.needsUpdate = true;
      this.clock.stop();
      this.clock.start();
    }

    if (changes["width"]?.currentValue) {
      this.canvas.width = changes["width"].currentValue;
      console.log(changes["width"].currentValue)
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height)

    }
    if (changes["height"]?.currentValue) {
      this.canvas.height = changes["height"].currentValue;
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height)
    }

    if (changes["customUniforms"]?.currentValue) {
      const state = changes["customUniforms"]?.currentValue as UniformState;
      const values = Object.values(state);

      this.additionalUniforms = {};

      values.forEach(x => {

        if (!x.key) return;
        if (x.value == null || x.value == undefined || x.value == "") return;

        if (this.shaderMaterial.uniforms[x.key])
          this.shaderMaterial.uniforms[x.key].value = x.value;
        else
          this.shaderMaterial.uniforms[x.key] = { value: x.value };
      })

      Object.keys(this.shaderMaterial.uniforms).forEach(y => {
        if (!values.find(x => x.key == y) && !this.uniforms[y]?.value)
          delete this.shaderMaterial.uniforms[y];
      });

      this.shaderMaterial.needsUpdate = true;
    }
  }

  ngOnInit(): void {

  }



  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.addMouse();
  }
}
