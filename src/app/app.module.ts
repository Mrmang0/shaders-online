import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonacoEditorComponent } from './app-monaco-editor/app-monaco-editor.component';
import { AppGlslCanvasComponent } from './app-glsl-canvas/app-glsl-canvas.component';
import { AngularSplitModule } from 'angular-split';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { AppUniformDialogComponent } from './app-uniform-dialog/app-uniform-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MonacoEditorComponent,
    AppGlslCanvasComponent,
    AppUniformDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSplitModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
