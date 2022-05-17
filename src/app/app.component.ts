import { Component, ElementRef, EventEmitter, Inject, Injectable, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { IOutputData } from 'angular-split';
import { min, Observable } from 'rxjs';
import { default_frag } from './app-monaco-editor/app-monaco-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number: number = 0;
  textContent: string = default_frag;
  @Output() CodeChange = new EventEmitter<string>();

  public Width: number = 400;
  public Height: number = 400;
  private dragPosition = 0;
  private orientation: "horizontal" | "vertical" = "horizontal";


  constructor(@Inject(ElementRef) private elementRef: ElementRef) { }

  public handleCodeChange(code: string) {
    this.textContent = code;
    this.CodeChange.emit(this.textContent);
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

}


