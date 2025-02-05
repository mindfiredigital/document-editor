import { Component } from '@angular/core';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';

@Component({
  selector: 'lib-my-lib',
  template: `
    <lib-editor-toolbar></lib-editor-toolbar>
    <lib-canvas-editor></lib-canvas-editor>
    <lib-editor-footer></lib-editor-footer>
  `,
  styles: ``,

})

export class MyLibComponent {
  
}
