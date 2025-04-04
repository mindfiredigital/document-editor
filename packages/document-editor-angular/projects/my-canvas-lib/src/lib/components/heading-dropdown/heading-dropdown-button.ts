import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DOMEventHandlers, TitleLevel } from '@mindfiredigital/canvas-editor';
import { HeadingLevel } from '../util/constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heading-dropdown-button',
  templateUrl: './heading-dropdown-button.html',
  styleUrls: ['./heading-dropdown-button.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class HeadingDropdownButtonComponent {
  headingControl = new FormControl('Normal');
  headingLevels = Object.keys(HeadingLevel);

  constructor() {}

  handleHeadingSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const level: TitleLevel | null =
      selectedValue !== 'Normal'
        ? (HeadingLevel[
            selectedValue as keyof typeof HeadingLevel
          ] as unknown as TitleLevel)
        : null;

    DOMEventHandlers.setTitle(level);
  }

  getHeadingFontSize(level: string): string {
    if (level === 'Normal') return '14px';
    const headingNumber = Number(level.charAt(level.length - 1));
    return !isNaN(headingNumber) ? `${26 - headingNumber * 2}px` : '14px';
  }
}
