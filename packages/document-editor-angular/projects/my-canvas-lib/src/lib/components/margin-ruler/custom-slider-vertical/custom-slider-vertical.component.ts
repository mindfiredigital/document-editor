import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'lib-custom-slider-vertical',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './custom-slider-vertical.component.html',
  styleUrl: './custom-slider-vertical.component.css',
})
export class CustomSliderVerticalComponent {
  value = new FormControl(0);
  verticalMarks = new Array(12)
    .fill(0)
    .map((ob, i) => ({ value: -i * 96, label: i }));

  constructor() {}

  onInputChange(event: any) {
    this.value.setValue(event.value);
  }
}
