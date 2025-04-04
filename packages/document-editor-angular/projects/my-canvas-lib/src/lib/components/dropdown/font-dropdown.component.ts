import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor';
import { FONTS } from '../util/constants';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-font-dropdown',
  templateUrl: './font-dropdown.component.html',
  styleUrls: ['./font-dropdown.component.css'],
  imports: [CommonModule, MatSelectModule, MatTooltipModule, FormsModule],
  providers: [],
})
export class FontDropdownComponent {
  @Input() style: any = {};
  @Output() fontChange = new EventEmitter<string>();
  fonts = Object.values(FONTS);
  selectedFont = 'Arial';

  handleChange(event: Event): void {
    const font = (event.target as HTMLSelectElement).value;
    this.selectedFont = font;
    DOMEventHandlers.handleFontFamily(font);
    this.fontChange.emit(font);
  }
}
