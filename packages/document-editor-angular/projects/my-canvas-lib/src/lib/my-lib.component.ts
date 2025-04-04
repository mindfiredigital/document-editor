import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';

@Component({
  selector: 'DocumentEditor',
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
      .toolbar {
        display: flex;
        justify-content: center;
        margin-top: 11px;
      }
    `,
  ],
  standalone: true,
  // Import standalone child components here:
  imports: [
    EditorToolbarComponent,
    CanvasEditorComponent,
    EditorFooterComponent,
  ],
})
export class MyLibComponent {
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
    this.on_change.emit(event);
  }

  handleSelect(action: string) {
    this.on_select.emit(action);
  }
  onToolbarAction(action: string) {
    this.on_select.emit(action);
  }
}
