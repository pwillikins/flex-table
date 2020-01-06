import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  columns = [
    {
      title: 'column title 1',
      type: 'input',
      class: '',
      data: 'name'
    },
    {
      title: 'column title 2',
      type: 'dropdown',
      class: '',
      data: 'code',
      dropdownOptions: [
        {id: 1, option: 'Option 1'},
        {id: 2, option: 'Option 2'},
        {id: 3, option: 'Option 3'}
      ]
    },
    {
      title: 'column title 3',
      type: 'checkbox',
      class: '',
      data: 'description'
    }
  ]

  data = [
    {
      name: 'Alice Cooper',
      code: '12345',
      description: 'true'
    },
    {
      name: 'Bob Thunder',
      code: '98765',
      description: 'false'
    },
    {
      name: 'Jay Swift',
      code: '09578',
      description: 'true'
    }
  ]
}

export interface Column {
  type: String,
  class: String,
  title: String
}
