import { Component, Input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ImageUploadButtonComponent } from '../image-upload-button/image-upload-button.component';
import { EditorMode, IElement, PageMode, DOMEventHandlers, RowFlex, ListType, ListStyle } from '@mindfiredigital/canvas-editor';
import { IRangeStyle } from '@mindfiredigital/canvas-editor/dist/src/editor/interface/Listener';
@Component({
  selector: 'lib-emphasis',
  standalone: true,
  imports: [MatButtonToggleModule,ImageUploadButtonComponent],
  templateUrl: './emphasis.component.html',
  styleUrl: './emphasis.component.css',
})
export class EmphasisComponent {
  @Input() toolbar: any;
  @Input() toolbarClass: any;

  contentStyles: IRangeStyle | undefined;
  alignment: string = RowFlex.LEFT;
  listType: string = '';
  formats: string[] = [];
  private interval: any;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      const data = DOMEventHandlers.getContentStyles();
      this.contentStyles = data;
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  toggleFormat(format: string): void {
    if (this.formats.indexOf(format) === -1) {
      this.formats.push(format);
    } else {
      this.formats = this.formats.filter((f) => f !== format);
    }

    // Call appropriate formatting function
    switch (format) {
      case 'Bold':
        DOMEventHandlers.handleBold();
        break;
      case 'Italic':
        DOMEventHandlers.handleItalic();
        break;
      case 'Underline':
        DOMEventHandlers.handleUnderline();
        break;
      case 'Strikethrough':
        DOMEventHandlers.handleStrikeout();
        break;
    }
  }

  handleUndo(): void {
    DOMEventHandlers.handleUndo();
  }

  handleRedo(): void {
    DOMEventHandlers.handleRedo();
  }

  handleAlignment(alignment: RowFlex): void {
    DOMEventHandlers.handleAlign(alignment);
    this.alignment = alignment;
  }

  handleList(type: ListType): void {
    DOMEventHandlers.handleList(type, ListStyle.DECIMAL);
    this.listType = this.listType === type ? '' : type;
  }

  setTextColor(event: Event): void {
    const color = (event.target as HTMLInputElement).value;
    DOMEventHandlers.setFontColor(color);
  }

  // setBackgroundColor(event: Event): void {
  //   const color = (event.target as HTMLInputElement).value;
  //   DOMEventHandlers.set(color);
  // }

  // clearFormatting(): void {
  //   this.formats = [];
  //   DOMEventHandlers.clear();
  // }
  onImageSelected(event: { base64: string, width: number, height: number }) {
    DOMEventHandlers.setImage({
      value: event.base64,
      height: event.height,
      width: event.width,
    });
  }
}
