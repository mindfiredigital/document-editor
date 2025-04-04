import { Component, Input, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-font-size-button',
  standalone: true,
  template: `
    <div class="font-size-container" [ngStyle]="style">
      <button
        mat-icon-button
        (click)="handleDecreaseFont()"
        matTooltip="Decrease font size"
      >
        <fa-icon [icon]="faMinus" size="xs"></fa-icon>
      </button>
      <input
        matInput
        type="text"
        [value]="fontSize"
        (click)="handleTextFieldClick()"
        (input)="handleOnChange($event)"
        class="font-size-input"
      />
      <button
        mat-icon-button
        class="small-icon"
        (click)="handleIncreaseFont()"
        matTooltip="Increase font size"
      >
        <fa-icon [icon]="faPlus"></fa-icon>
      </button>
      <div
        *ngIf="dropdownOpen"
        class="dropdown-overlay"
        (click)="handleDropdownClose()"
      ></div>
      <div *ngIf="dropdownOpen" class="font-size-dropdown">
        <div
          *ngFor="let size of fontSizes"
          (click)="handleFontSizeChange(size)"
          class="dropdown-item"
        >
          {{ size }}
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .font-size-container {
        display: flex;
        align-items: center;
        position: relative;
      }
      .font-size-input {
        width: 50px;
        text-align: center;
        cursor: pointer;
      }
      .font-size-dropdown {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        padding: 5px 0;
      }
      .dropdown-item {
        padding: 8px;
        cursor: pointer;
        text-align: center;
      }
      .dropdown-item:hover {
        background: #f0f0f0;
      }
      .dropdown-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9998;
      }
    `,
  ],
  imports: [
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FontAwesomeModule,
  ],
})
export class FontSizeButtonComponent implements OnInit {
  @Input() size: number = 16;
  @Input() style: any;
  fontSize: number = this.size;
  dropdownOpen: boolean = false;
  fontSizes: number[] = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72];
  faPlus = faPlus; // ✅ Plus Icon
  faMinus = faMinus;
  ngOnInit(): void {
    this.fontSize = this.size;
  }

  handleDecreaseFont(): void {
    if (this.fontSize > 1) {
      this.fontSize -= 2;
      DOMEventHandlers.decreaseFontSize();
    }
  }

  handleIncreaseFont(): void {
    if (this.fontSize < 72) {
      this.fontSize += 2;
      DOMEventHandlers.increaseFontSize();
    }
  }

  handleTextFieldClick(): void {
    this.dropdownOpen = true;
  }

  handleDropdownClose(): void {
    this.dropdownOpen = false;
  }

  handleFontSizeChange(size: number): void {
    this.fontSize = size;
    this.handleDropdownClose();
    DOMEventHandlers.setSize(size);
  }

  handleOnChange(event: Event): void {
    const newFontSize = Number((event.target as HTMLInputElement).value);
    if (!isNaN(newFontSize)) {
      this.fontSize = newFontSize;
      DOMEventHandlers.setSize(newFontSize);
    }
  }
}
