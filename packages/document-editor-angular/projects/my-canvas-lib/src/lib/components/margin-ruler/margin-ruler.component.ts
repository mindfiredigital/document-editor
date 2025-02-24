import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { setDocumentMargins } from '../../store/document.actions';
import { selectDocumentMargins } from '../../store/document.selectors';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-margin-ruler',
  templateUrl: './margin-ruler.component.html',
  styleUrls: ['./margin-ruler.component.css'],
  standalone: true,
  imports: [CommonModule, MatSliderModule, FormsModule],
  encapsulation: ViewEncapsulation.None,
})
export class MarginRulerComponent implements OnInit {
  verticalTicks: { value: number; label: number }[] = [];
  horizontalTicks: { value: number; label: number }[] = [];
  verticalSlider: number[] = [-200, -100];
  horizontalSlider: number[] = [120, 696];
  totalNumbersTicksHorizontal = 8;
  totalNumbersTicksVertical = 12;
  offset = 303;
  verticalOffset = -84;
  documentMargins$: Observable<number[]>;
  @Input() documentId!: string;

  constructor(private store: Store) {
    this.documentMargins$ = this.store.select(selectDocumentMargins);
  }

  ngOnInit(): void {
    this.generateRulers();
    this.subscribeToMargins();
  }
  generateRulers(): void {
    this.verticalTicks = Array.from({ length: 12 }, (_, i) => ({
      value: this.verticalOffset + i * 96, // Start from -1056
      label: i,
    }));

    // Horizontal marks with offset (matching React behavior)
    this.horizontalTicks = Array.from({ length: 9 }, (_, i) => ({
      value: this.offset + i * 96, // Start from 0
      label: i,
    }));
  }

  subscribeToMargins(): void {
    this.documentMargins$.pipe(debounceTime(500)).subscribe(margins => {
      if (margins?.length) {
        this.verticalSlider = [
          Math.abs(1056 - margins[1]) * -1,
          margins[0] * -1,
        ];
        this.horizontalSlider = [margins[2], 816 - margins[3]];
        if (!this.verticalSlider.length && !this.horizontalSlider.length) {
          DOMEventHandlers.setPaperMargins(margins);
        }
      }
    });
  }

  handleChange(value: any): void {
    let [bottom, top] = value;
    this.verticalSlider = value;
    let margin = [...this.verticalSlider];
    margin[0] = Math.abs(top);
    margin[1] = 1056 - Math.abs(bottom);
    DOMEventHandlers.setPaperMargins(margin);
    this.store.dispatch(setDocumentMargins({ margins: margin }));
  }

  handleChangeHorizontal(value: any): void {
    let [left, right] = value;
    this.horizontalSlider = value;
    let margin = [...this.horizontalSlider];
    margin[2] = left;
    margin[3] = 816 - right;
    DOMEventHandlers.setPaperMargins(margin);
    this.store.dispatch(setDocumentMargins({ margins: margin }));
  }
}
