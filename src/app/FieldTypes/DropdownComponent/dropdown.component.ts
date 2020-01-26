import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown-field',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {

  @Input() fieldData
  @Input() fieldOptions

  @Output() fieldUpdated: EventEmitter<any> = new EventEmitter()


  ngOnInit() {
    // console.log('fieldData', this.fieldData)
  }
}