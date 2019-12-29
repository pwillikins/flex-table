import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexTableComponent } from './FlexTableComponent/flextable.component';
import { InputComponent } from './FieldTypes/input.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexTableComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
