import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { IOutputData } from 'angular-split';
import { filter, Observable } from 'rxjs';
import { default_frag, default_vertex } from 'src/app/app-monaco-editor/app-monaco-editor.component';
import { UniformState } from 'src/app/types/uniforms';

@Component({
  selector: 'app-workspace',
  templateUrl: './app-workspace.component.html',
  styleUrls: ['./app-workspace.component.scss']
})
export class AppWorkspaceComponent implements OnInit {

  public Width: number = 400;
  public Height: number = 400;
  private dragPosition = 0;
  private orientation: "horizontal" | "vertical" = "horizontal";
  public error: string = "";
  number: number = 0;
  fragmentShader: string = default_frag;
  vertexShader: string = default_vertex;
  @Output() fragmentShaderChange = new EventEmitter<string>();
  @Output() vertexShaderChange = new EventEmitter<string>();
  public customUniforms: UniformState = {}
  constructor(@Inject(ElementRef) private elementRef: ElementRef) { }

  ngOnInit(): void {
    const baseConsoleError = console.error;

    globalThis.console.error = (...data: any[]) => {
      if ((data[0] as string).includes("THREE.WebGLProgram:")) {
        this.error = (data[0] as string).replace("THREE.WebGLProgram:", "").trim();
      }

      setTimeout(() => {
        this.error = "";
      }, 10000);

      baseConsoleError(...data);
    }
  }

  public handleFragmentShanderChange(code: string) {
    this.fragmentShader = code;
    this.fragmentShaderChange.emit(this.fragmentShader);
  }

  public handleVertexShanderChange(code: string) {
    this.vertexShader = code;
    this.vertexShaderChange.emit(this.vertexShader);
  }

  public handleUnifromsChange(state: UniformState) {
    this.customUniforms = state;
  }

  public handleDrag(event: IOutputData) {
    const element = this.elementRef.nativeElement as HTMLElement;

    const width = Math.round(element.clientWidth - (element.clientWidth * (event.sizes[1] as number / 100))) - 30;
    const height = Math.round(element.clientHeight - (element.clientHeight * (event.sizes[1] as number / 100))) - 30;

    const minValue = Math.min(width, height);
    const minWidth = Math.min(width, element.clientHeight);

    if (this.orientation == "horizontal") {
      this.Width = minWidth - 70;
      this.Height = minWidth - 70;
    } else {
      this.Width = minValue;
      this.Height = minValue;
    }
    this.dragPosition = event.sizes[1] as number;
  }

  public handlePostionChange(event: MatButtonToggleChange) {
    const element = this.elementRef.nativeElement as HTMLElement;
    this.orientation = event.value;
    const width = Math.round(element.clientWidth - (element.clientWidth * (this.dragPosition / 100))) - 30;
    const height = Math.round(element.clientHeight - (element.clientHeight * (this.dragPosition / 100))) - 30;

    const minValue = Math.min(width, height);
    const minWidth = Math.min(width, element.clientHeight);

    if (this.orientation == "horizontal") {
      this.Width = minWidth - 70;
      this.Height = minWidth - 70;
    } else {
      this.Width = minValue;
      this.Height = minValue;
    }
  }

  @Input() public $formChanges: Observable<UniformState> | null = null;
}
