import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CanvasEditorComponent } from '../components/canvas-editor/canvas-editor.component';
import { EditorToolbarComponent } from '../components/editor-toolbar/editor-toolbar.component';
import { EditorFooterComponent } from '../components/editor-footer/editor-footer.component';

@Component({
  selector: 'app-document-editor',
  template: `
    <div class="toolbar">
      <lib-editor-toolbar
        [toolbarItem]="parsedToolbar"
        [toolbarClass]="parsedToolbarClass"
        (change)="handleChange($event)"
        (select)="handleSelect($event)"
      ></lib-editor-toolbar>
    </div>
    <lib-canvas-editor
      [style]="canvas_class"
      [data]="value"
      (onChange)="handleChange($event)"
      (onSelect)="onToolbarAction($event)"
    ></lib-canvas-editor>

    <lib-editor-footer></lib-editor-footer>
  `,
  styles: [
    `
      .editor-container {
        border: 1px solid #ccc;
        padding: 10px;
      }
      .toolbar {
        display: flex;
        justify-content: center;
        margin-top: 11px;
      }
    `,
  ],
  standalone: true,
  imports: [
    CanvasEditorComponent,
    EditorFooterComponent,
    EditorToolbarComponent,
  ],
})
export class DocumentEditorComponent implements OnInit {
  @Input() value: string = 'Default text';
  @Input() toolbar: any = '{}';
  @Input() toolbar_class: any = {};
  @Input() canvas_class: any = {};
  @Output() on_change = new EventEmitter<string>();
  @Output() on_select = new EventEmitter<string>();

  parsedToolbar: any = {}; // Holds the correctly parsed toolbar object
  parsedToolbarClass: any = {};
  ngOnChanges() {
    this.parsedToolbar = this.parseValue(this.toolbar);
    this.parsedToolbarClass = this.parseValue(this.toolbar_class);
  }

  private parseValue(value: any): any {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch {
        return {};
      }
    }
    return value;
  }

  ngOnInit(): void {
    console.log(this.toolbar);
  }
  handleChange(event: any) {
    this.on_change.emit(event.target.value);
  }

  handleSelect(action: string) {
    this.on_select.emit(action);
  }
  onToolbarAction(action: string) {
    this.on_select.emit(action);
  }
}
