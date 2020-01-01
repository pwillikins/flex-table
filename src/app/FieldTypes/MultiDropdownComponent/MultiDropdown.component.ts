import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'multi-dropdown-field',
  templateUrl: './MultiDropdown.component.html',
  styleUrls: ['./MultiDropdown.component.scss']
})

export class MultiDropdownComponent {

  @Input() fieldData
  @Input() fieldOptions

  @Output() fieldUpdated: EventEmitter<any> = new EventEmitter()

}