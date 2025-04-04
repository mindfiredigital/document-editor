import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { setDocumentMargins } from '../../store/document.actions';
import { selectDocumentMargins } from '../../store/document.selectors';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import {
  ChangeContext,
  NgxSliderModule,
  Options,
} from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-margin-ruler',
  templateUrl: './margin-ruler.component.html',
  styleUrls: ['./margin-ruler.component.css'],
  standalone: true,
  imports: [CommonModule, MatSliderModule, FormsModule, NgxSliderModule],
  encapsulation: ViewEncapsulation.None,
})
export class MarginRulerComponent implements OnInit {
  verticalSlider: number[] = [100, 960];
  horizontalSlider: number[] = [135, 696];
  @Input() documentId!: string;

  verticalMarks = Array.from({ length: 12 }, (_, i) => ({
    value: i * 96,
    legend: i.toString(),
  }));

  horizontalMarks = Array.from({ length: 9 }, (_, i) => ({
    value: i * 96,
    legend: i.toString(),
  }));

  verticalOptions: Options = {
    floor: -1056,
    ceil: 0,
    step: 24,
    showTicksValues: true,
    stepsArray: this.verticalMarks,
    vertical: true,
    rightToLeft: true,
  };

  horizontalOptions: Options = {
    floor: 0,
    ceil: 816,
    step: 24,
    showTicksValues: true,
    stepsArray: this.horizontalMarks,
  };

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(selectDocumentMargins).subscribe(margins => {
      console.log(margins);
      if (margins?.length) {
        this.verticalSlider = [-1 * (1056 - margins[1]), -1 * margins[0]];
        this.horizontalSlider = [margins[2], 816 - margins[3]];
      }
    });
  }

  onVerticalChange(event: ChangeContext) {
    let value = [event.value, event.highValue as number];
    this.verticalSlider = value;

    let margins = [...this.verticalSlider];
    margins[0] = Math.abs(value[1]);
    margins[1] = 1056 - Math.abs(value[0]);

    DOMEventHandlers.setPaperMargins(margins);
    this.store.dispatch(setDocumentMargins({ margins }));
  }

  onHorizontalChange(event: ChangeContext) {
    let value = [event.value, event.highValue as number];
    this.horizontalSlider = value;
    let margins = [...this.horizontalSlider];
    margins[2] = value[0];
    margins[3] = 816 - value[1];

    DOMEventHandlers.setPaperMargins(margins);
    this.store.dispatch(setDocumentMargins({ margins }));
  }
}
