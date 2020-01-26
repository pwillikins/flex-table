import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'checkbox-field',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent {

  @Input() fieldData
  checkbox: any = {
    checked: false
  }

  @Output() fieldUpdated: EventEmitter<any> = new EventEmitter()

  ngOnInit() {
    this.checkbox.checked = this.fieldData || false
    // console.log('checked', this.checkbox.checked)
  }
}