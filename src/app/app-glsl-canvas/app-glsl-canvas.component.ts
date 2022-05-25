import { AfterContentInit, ApplicationRef, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Canvas } from 'glsl-canvas-js';
import { Observable } from 'rxjs';
import { default_frag } from '../app-monaco-editor/app-monaco-editor.component';

@Component({
  selector: 'app-glsl-canvas',
  templateUrl: './app-glsl-canvas.component.html',
  styleUrls: ['./app-glsl-canvas.component.scss']
})
export class AppGlslCanvasComponent implements OnInit, AfterContentInit {

  public fragmentShander: string;
  public canvas: Canvas | null = null;
  public error: string = "";

  @Input()
  public Textures: Observable<any> | null = null;

  @Input()
  public get fragment(): string {
    return this.fragmentShander;
  }

  @Output() FragmentChanged = new EventEmitter();
  public set fragment(frag: string) {
    this.fragmentShander = frag;
    this.FragmentChanged.emit(this.fragmentShander);
  }

  private _width = 400;
  private _height = 400;

  @Input()
  get width() {
    return this._width;
  }
  @Output() WidthChanged = new EventEmitter();
  set width(width: number) {
    if (!width) return;
    this._width = width;
    this.WidthChanged.emit(this.width);
    if (!this.canvasElement) return;
    this.canvasElement.width = width;
    this.canvasElement.style.width = width + "px";
  }

  @Input()
  get height() {
    return this._height;
  }
  @Output() HeightChanged = new EventEmitter();
  set height(height: number) {
    if (!height) return;
    this._height = height;
    this.HeightChanged.emit(this.height);
    if (!this.canvasElement) return;
    this.canvasElement.height = height;
    this.canvasElement.style.height = height + "px";

  }

  @ViewChild('glsl-canvas') d1: ElementRef;


  private _detector: ChangeDetectorRef;
  private _renderer: Renderer2;
  private _appRef: ApplicationRef
  private _elementRef: ElementRef;
  private canvasElement: HTMLCanvasElement | null = null;
  constructor(renderer: Renderer2, elementRef: ElementRef, detector: ChangeDetectorRef, appRef: ApplicationRef) {
    this.fragmentShander = "";
    this._detector = detector;
    this._renderer = renderer;
    this._appRef = appRef;
    this._elementRef = elementRef;
    this.d1 = this._elementRef.nativeElement;



  }
  ngAfterContentInit(): void {
    const options = {
      vertexString: ``,
      fragmentString: default_frag,
      alpha: true,
      antialias: true,
      mode: 'flat',
      extensions: ['EXT_shader_texture_lod'],
      width: this.width,
      height: this.height,
    };

    this.canvasElement = this._elementRef.nativeElement.querySelector('.glsl-canvas');
    if (!this.canvasElement) return;
    this.canvas = new Canvas(this.canvasElement, options);

    this.canvasElement.style.width = this.width + "px";
    this.canvasElement.style.height = this.height + "px";
  }

  ngOnInit(): void {

    const baseConsoleError = console.error;

    globalThis.console.error = (...data: any[]) => {
      if ((data[0] as string).includes("***")) {
        this.error = (data[0] as string).replace("***", "").trim();
      }

      baseConsoleError(...data);
    }

    this.FragmentChanged.subscribe(x => {
      this.canvas?.load(x, "").then((x) => {
        if (x) {
          this.error = "";
        }
      })
    })

    this.Textures?.subscribe(x => {
      console.log(x);
      this.canvas?.setTexture(x.textureName, x.textureUrl);
    })
  }

}
