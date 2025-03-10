import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  DOMEventHandlers,
  EditorMode,
  PageMode,
} from '@mindfiredigital/canvas-editor';
import { MarginRulerComponent } from '../margin-ruler/margin-ruler.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'lib-canvas-editor',
  templateUrl: './canvas-editor.component.html',
  styleUrls: ['./canvas-editor.component.css'],
  imports: [MarginRulerComponent, CommonModule],
})
export class CanvasEditorComponent implements OnInit, AfterViewInit {
  @Input() style: any = {}; // Equivalent to `_props.style`
  @Input() data: any = ''; // Equivalent to `_props.data`
  @Output() onChange = new EventEmitter<string>(); // Equivalent to `_props.onChange`
  @Output() onSelect = new EventEmitter<string>(); // Equivalent to `_props.onSelect`

  @ViewChild('canvasEditorRef', { static: false }) canvasEditorRef!: ElementRef;
  documentId: string = '';
  editorContent: any = [];
  selectedText: string = '';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const container = this.canvasEditorRef.nativeElement as HTMLDivElement;

    if (container.querySelector('[editor-component="main"]')) {
      return;
    }

    const editorOptions = {
      height: 1056,
      width: 816,
      mode: EditorMode.EDIT,
      pageMode: PageMode.PAGING,
      pageNumber: {
        format: '{pageNo}/{pageCount}',
      },
      minSize: 1,
      maxSize: 72,
    };

    // MouseUp Event to Detect Text Selection
    container.addEventListener('mouseup', () => {
      const selectedText = DOMEventHandlers.getSelectedText();
      if (selectedText) {
        this.onSelect.emit(selectedText);
      }
    });

    // KeyDown Event to Capture Content Changes
    container.addEventListener('keydown', () => {
      const text = DOMEventHandlers.getContent()?.data?.main;
      this.editorContent = text;
      if (text && text.length) {
        console.log(text);
        this.onChange.emit(text[0]?.value);
      }
    });

    // Initialize Canvas Editor
    DOMEventHandlers.register(container, this.editorContent, editorOptions);
    if (this.data) {
      this.editorContent = this.data;
      DOMEventHandlers.setContent({ main: [{ value: this.data }] });
    }
  }
}
