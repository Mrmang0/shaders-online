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
          value: default_frag, 
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

      registerGlslLanguage();
    }
  }
}

export const default_frag = `
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

uniform vec4 a_positon;
uniform vec4 a_normal;
uniform vec4 a_position;
uniform vec4 a_color;

void main() {
   vec2 uv = gl_FragCoord.xy / u_resolution.xy;   
   float x = abs(0.5-uv.x);
   float y = abs(0.5-uv.y);
   vec3 colorvec = vec3(x,y,1);
   gl_FragColor = vec4(colorvec, 0);
}
`