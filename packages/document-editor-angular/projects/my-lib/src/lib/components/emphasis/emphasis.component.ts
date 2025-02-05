import { Component, Input } from '@angular/core';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'lib-emphasis',
  standalone: true,
  imports: [],
  templateUrl: './emphasis.component.html',
  styleUrl: './emphasis.component.css',
})
export class EmphasisComponent {
  @Input() toolbar: any;
  @Input() toolbarClass: any;

  formats: string[] = [];
  boldButtonStyle: any = { border: '0px', marginRight: '1px' };
  italicButtonStyle: any = { border: '0px', marginRight: '1px' };
  underlinedButtonStyle: any = { border: '0px', marginRight: '1px' };

  handleFormat(newFormats: any): void {
    this.formats = newFormats;
  }

  handleBold(): void {
    DOMEventHandlers.handleBold();
  }

  handleItalic(): void {
    DOMEventHandlers.handleItalic();
  }

  handleUnderline(): void {
    DOMEventHandlers.handleUnderline();
  }
}
