import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor';

interface SelectionRect {
  left: number;
  top: number;
  visibility: boolean;
}

@Directive({
  selector: '[appSelectionPosition]',
})
export class SelectionPositionDirective {
  @Output() selectedTextChange = new EventEmitter<string>();
  @Output() selectionRectChange = new EventEmitter<SelectionRect>();

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    const selectedText = DOMEventHandlers.getSelectedText()?.toString().trim();

    if (selectedText) {
      this.selectedTextChange.emit(selectedText);
      this.selectionRectChange.emit({ left: 0, top: 0, visibility: true });
    } else {
      this.selectionRectChange.emit({ left: 0, top: 0, visibility: false });
    }
  }
}
