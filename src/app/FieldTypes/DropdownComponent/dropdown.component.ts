import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown-field',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent {

  @Input() fieldData
  @Input() fieldOptions

  @Output() fieldUpdated: EventEmitter<any> = new EventEmitter()

}