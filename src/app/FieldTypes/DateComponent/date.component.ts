import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'date-field',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})

export class DateComponent {

  @Input() fieldData

  @Output() fieldUpdated: EventEmitter<any> = new EventEmitter()

}