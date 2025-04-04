import { Component, Input } from '@angular/core';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { Color } from '../util/constants';

@Component({
  selector: 'app-font-color-button',
  templateUrl: './font-color-button.component.html',
  styleUrls: ['./font-color-button.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatButtonModule,
    ColorPaletteComponent,
  ],
})
export class FontColorButtonComponent {
  @Input() textColor: string | null | undefined;
  @Input() style: any;
  Color = Color;
  faPalette = faPalette;

  anchorEl: HTMLElement | null = null;

  handleClick(event: MouseEvent) {
    this.anchorEl = event.currentTarget as HTMLElement;
  }

  handleClose() {
    this.anchorEl = null;
  }
}
