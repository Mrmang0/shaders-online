import { Component, ElementRef, EventEmitter, Inject, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { IOutputData } from 'angular-split';
import { Subject } from 'rxjs';
import { default_frag } from './app-monaco-editor/app-monaco-editor.component';
import { AppUniformDialogComponent } from './app-uniform-dialog/app-uniform-dialog.component';

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

  public Textures = new Subject<any>();

  constructor(
    @Inject(ElementRef) private elementRef: ElementRef,
    public dialog: MatDialog
  ) { }

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

  public openUniformDialog() {

    console.log('open')

    const ref = this.dialog.open(AppUniformDialogComponent);
    ref.afterClosed().subscribe(result => {
       this.Textures.next(result);
    });
  }

}


