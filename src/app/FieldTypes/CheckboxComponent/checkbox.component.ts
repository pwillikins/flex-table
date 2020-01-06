import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'checkbox-field',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent {

  @Input() fieldData

  @Output() fieldUpdated: EventEmitter<any> = new EventEmitter()

  ngOnInit() {
    console.log('data', this.fieldData)
  }
}