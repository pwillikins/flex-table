import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  @Input() fieldData

  @Output() fieldUpdated: EventEmitter<any> = new EventEmitter()

}