import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog"

@Component({
  selector: 'app-app-uniform-dialog',
  templateUrl: './app-uniform-dialog.component.html',
  styleUrls: ['./app-uniform-dialog.component.scss']
})
export class AppUniformDialogComponent {

  constructor(public dialogRef: MatDialogRef<AppUniformDialogComponent>) {
    console.log("Hi")
  }


  closeDialog() {
    this.dialogRef.close({
      textureName: this.fileName,
      textureUrl: this.textureUrl
    });
  }

  public fileName: string = "";
  public textureUrl: string = "";


  onTextureNameChange(event: any) {
    console.log(event.target.value)
    this.fileName = event.target.value;
  }

  onTextureUrlChange(event: any) {
    this.textureUrl = event.target.value;
  }
}
