import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { MatTabsModule } from "@angular/material/tabs";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppUniformDialogComponent } from './app-uniform-dialog/app-uniform-dialog.component';
import { AppWorkspaceComponent } from './three-js/app-workspace/app-workspace.component';
import { AppThreeSceneComponent } from './three-js/app-three-scene/app-three-scene.component';
import { UniformsManagerComponent } from './three-js/uniforms-manager/uniforms-manager.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"


@NgModule({
  declarations: [
    AppComponent,
    MonacoEditorComponent,
    AppThreeSceneComponent,
    AppWorkspaceComponent,
    AppGlslCanvasComponent,
    AppUniformDialogComponent,
    AppWorkspaceComponent,
    UniformsManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSplitModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
