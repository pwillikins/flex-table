import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexTableComponent } from './FlexTableComponent/flextable.component';
import { InputComponent } from './FieldTypes/InputComponent/input.component';
import { CheckboxComponent } from './FieldTypes/CheckboxComponent/checkbox.component';
import { DropdownComponent } from './FieldTypes/DropdownComponent/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexTableComponent,
    InputComponent,
    CheckboxComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
