import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { faPalette, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { Color, colors } from '../util/constants';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ColorPickerComponent } from '../color-picker/color-picker.component';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    FontAwesomeModule,
    MatButtonModule,
    ColorPickerComponent,
    MatDialogModule,
  ],
})
export class ColorPaletteComponent implements AfterViewInit {
  @ViewChild(MatMenuTrigger, { static: false }) menuTrigger!: MatMenuTrigger;

  @Input() definedColor!: string;
  @Input() feature!: string;
  @Output() close = new EventEmitter<void>();
  colorPickerAnchor: HTMLElement | null = null;
  colors = colors;
  faPalette = faPalette;
  faCheck = faCheck;
  customColors: string[] = [];

  constructor(private dialog: MatDialog) {}
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.menuTrigger) {
        this.menuTrigger.openMenu();
      }
    }, 500);
  }

  handleColor(hexColor: string) {
    if (this.feature === Color.HIGHLIGHT) {
      DOMEventHandlers.highlightText(hexColor);
    } else if (this.feature === Color.COLOR) {
      DOMEventHandlers.setFontColor(hexColor);
    }
  }

  handleClick(event: MouseEvent) {
    this.colorPickerAnchor = event.target as HTMLElement;
    this.openColorPicker();
  }

  openColorPicker() {
    const dialogRef = this.dialog.open(ColorPickerComponent, {
      data: { color: this.definedColor, feature: this.feature },
    });

    dialogRef.afterClosed().subscribe((selectedColor: string) => {
      if (selectedColor) {
        this.customColors.push(selectedColor);
        this.handleColor(selectedColor);
      }
      this.colorPickerAnchor = null;
    });
  }

  colorPickerHandleClose() {
    this.colorPickerAnchor = null;
  }
}
