import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import {
  DOMEventHandlers,
  EditorMode,
  IElement,
  PageMode,
} from '@mindfiredigital/canvas-editor';
import { MarginRulerComponent } from '../margin-ruler/margin-ruler.component';
@Component({
  selector: 'lib-canvas-editor',
  standalone: true,
  imports: [MarginRulerComponent],
  templateUrl: './canvas-editor.component.html',
  styleUrl: './canvas-editor.component.css',
})
export class CanvasEditorComponent implements OnInit {
  props: any = {};
  documentId: string = '0';
  canvasEditorRef: any;
  dropdown = {
    left: 1180,
    top: 250,
    visiblity: false,
  };
  editorContent = [];

  selectedText = '';
  instance: any;
  constructor() {}

  ngOnInit(): void {
    const container = document.querySelector(
      '.canvas-editor'
    ) as HTMLDivElement;

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

    // container.addEventListener('mouseup', (e) => {
    //   _props.onSelect && _props?.onSelect(DOMEventHandlers.getSelectedText());
    // })

    // container.addEventListener('keydown', (e) => {
    //   const text = DOMEventHandlers.getContent()?.data?.main;
    //   setEditorContent(text);
    //   _props?.onChange && _props?.onChange(text[0].value);
    // })
    DOMEventHandlers.register(container, this.editorContent, {});
    DOMEventHandlers.setContent({ main: [{ value: 'hello' }] });
  }
}
