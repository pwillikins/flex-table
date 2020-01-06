import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  @Input() fieldData

  @Output() fieldUpdated: EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnInit() {
    console.log('field data', this.fieldData)
  }
}