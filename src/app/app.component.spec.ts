import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FieldTemplateComponent } from './FieldTemplate/FieldTemplate.component';
import { CheckboxComponent } from './FieldTypes/CheckboxComponent/checkbox.component';
import { DropdownComponent } from './FieldTypes/DropdownComponent/dropdown.component';
import { DateComponent } from './FieldTypes/DateComponent/date.component';
import { InputComponent } from './FieldTypes/InputComponent/input.component';
import { MultiDropdownComponent } from './FieldTypes/MultiDropdownComponent/MultiDropdown.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FieldTemplateComponent,
        CheckboxComponent,
        DropdownComponent,
        DateComponent,
        InputComponent,
        MultiDropdownComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'flex-table'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Flex Table')
  });

  it('should render the flex-table component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content')).toBeDefined();
  });
});
