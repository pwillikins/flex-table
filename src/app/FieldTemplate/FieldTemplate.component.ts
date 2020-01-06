import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'field-template',
  templateUrl: './FieldTemplate.component.html',
  styleUrls: ['./FieldTemplate.component.scss']
})

export class FieldTemplateComponent {

  @Input() fieldData
  @Input() fieldOptions
  @Input() fieldType

  @Output() fieldUpdated: EventEmitter<any> = new EventEmitter()

}