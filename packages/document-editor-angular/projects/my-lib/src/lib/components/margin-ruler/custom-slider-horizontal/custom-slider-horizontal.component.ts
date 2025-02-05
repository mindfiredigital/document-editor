import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'lib-custom-slider-horizontal',
  standalone: true,
  imports: [],
  templateUrl: './custom-slider-horizontal.component.html',
  styleUrl: './custom-slider-horizontal.component.css',
})
export class CustomSliderHorizontalComponent {
  value = new FormControl(0);
  horizontalMarks = new Array(9)
    .fill(0)
    .map((ob, i) => ({ value: i * 96, label: i }));

  constructor() {}

  onInputChange(event: any) {
    this.value.setValue(event.value);
  }
}
