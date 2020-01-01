import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexTableComponent } from './FlexTableComponent/flextable.component';
import { InputComponent } from './FieldTypes/InputComponent/input.component';
import { CheckboxComponent } from './FieldTypes/CheckboxComponent/checkbox.component';
import { DropdownComponent } from './FieldTypes/DropdownComponent/dropdown.component';
import { DateComponent } from './FieldTypes/DateComponent/date.component';
import { MultiDropdownComponent } from './FieldTypes/MultiDropdownComponent/MultiDropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexTableComponent,
    InputComponent,
    CheckboxComponent,
    DropdownComponent,
    DateComponent,
    MultiDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
