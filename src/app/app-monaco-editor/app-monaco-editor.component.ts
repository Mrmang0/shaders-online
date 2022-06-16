import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { editor, KeyCode } from "monaco-editor";
import { first } from "rxjs";
import { registerGlslLanguage } from "../consts/glsl-language";
import { MonacoEditorService } from "./monaco-editor.service";

declare var monaco: any;

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './app-monaco-editor.component.html',
  styleUrls: ['./app-monaco-editor.component.scss'],
})
export class MonacoEditorComponent implements OnInit, OnDestroy {
  monacoEditorService: MonacoEditorService;

  @Input() editorType: "vertex" | "fragment" = "fragment";

  constructor(monacoEditorService: MonacoEditorService) {
    this.monacoEditorService = monacoEditorService;
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  ngOnInit(): void {
    this.monacoEditorService.load();
    this.initMonaco();
  }
  public _editor: any;

  // @Input()
  // get Text(): string {
  //   return this._editor.getValue()
  // }
  @Output() TextChange = new EventEmitter();
  set Text(text: string) {
    if (this._editor != null) {
      this._editor.getModel().setValue(text);
      this.TextChange.emit(text);
    }
  }

  @ViewChild('editorContainer', { static: true }) _editorContainer: ElementRef | undefined;

  private initMonaco(): void {
    if (!this.monacoEditorService.loaded) {
      this.monacoEditorService.loadingFinished.pipe(first()).subscribe(() => {
        this.initMonaco();
      });
      return;
    }

    if (this._editorContainer != null) {

      this._editor = monaco.editor.create(
        this._editorContainer.nativeElement,
        {
          theme: 'vs-dark',
          language: 'glsl',
          value: this.editorType == "vertex" ? default_vertex : default_frag,
          automaticLayout: true,
          suggest: {
            snippetsPreventQuickSuggestions: false
          }
        },
      );

      this._editor.onKeyDown((ev: KeyboardEvent) => {
        const value = this._editor.getValue();
        this.TextChange.emit(value);
      })
    }
  }
}

export const default_frag = `
precision mediump float;

uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;

uniform vec4 a_positon;
uniform vec4 a_normal;
uniform vec4 a_position;
uniform vec4 a_color;

varying vec2 vUv;

void main() {
  gl_FragColor = vec4(vUv.x,vUv.y,0.5,0);
}
`

export const default_vertex = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`