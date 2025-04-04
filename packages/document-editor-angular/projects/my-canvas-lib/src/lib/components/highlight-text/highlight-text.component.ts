import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { CommonModule } from '@angular/common';
import { Color } from '../util/constants';
import { faFont, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-highlight-text-button',
  templateUrl: './highlight-text.component.html',
  styleUrls: ['./highlight-text.component.css'],
  standalone: true,
  imports: [
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    ColorPaletteComponent,
    CommonModule,
    FontAwesomeModule,
  ],
})
export class HighlightTextButtonComponent {
  @Input() color: string | null = null;
  @Input() style: Record<string, any> = {};

  Color = Color;
  faHighlighter = faHighlighter;
  // Store a reference to the button
  @ViewChild('buttonRef', { static: false }) buttonRef!: ElementRef;

  anchorEl: ElementRef | null = null;

  handleClick() {
    this.anchorEl = this.buttonRef;
  }

  handleClose() {
    this.anchorEl = null;
  }
}
