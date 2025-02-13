// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularCanvasEditorComponent } from './angular-canvas-editor.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    AngularCanvasEditorComponent, // Declare your root component (and others if needed)
  ],
  imports: [
    CommonModule, // Required for running in a browser
    AngularCanvasEditorComponent, // Import your Angular library module here
  ],
  providers: [],
})
export class CanvasLibModule {}
