import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './button-wrapper.component.html',
  styleUrl: './button-wrapper.component.css',
})
export class ButtonWrapperComponent {
  @Input() title: string = '';
  @Output() handleClick: EventEmitter<void> = new EventEmitter<void>();
}
