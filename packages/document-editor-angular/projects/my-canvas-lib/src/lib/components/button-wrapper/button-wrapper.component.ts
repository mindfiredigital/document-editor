import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'lib-button-wrapper',
  standalone: true,
  imports: [MatButtonToggle, CommonModule, MatTooltipModule],
  templateUrl: './button-wrapper.component.html',
  styleUrl: './button-wrapper.component.css',
})
export class ButtonWrapperComponent {
  @Input() title: string = '';
  @Input() sx!: { [key: string]: string };
  @Output() handleClick: EventEmitter<void> = new EventEmitter<void>();
}
