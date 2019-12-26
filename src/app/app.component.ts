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
      type: 'input',
      class: '',
      data: 'code'
    },
    {
      title: 'column title 3',
      type: 'input',
      class: '',
      data: 'description'
    }
  ]

  data = [
    {
      name: 'Alice Cooper',
      code: '12345',
      description: 'TEST'
    },
    {
      name: 'Bob Thunder',
      code: '98765',
      description: 'TEST'
    },
    {
      name: 'Jay Swift',
      code: '09578',
      description: 'TEST'
    }
  ]
}

export interface Column {
  type: String,
  class: String,
  title: String
}
