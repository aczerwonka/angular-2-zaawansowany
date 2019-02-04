import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGeneratorComponent } from './components/form-generator/form-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldGeneratorDirective } from './directives/form-field-generator.directive';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';
import { ButtonComponent } from './components/button/button.component';
import { MatFormField, MatInputModule, MatSelectModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [FormGeneratorComponent, FormFieldGeneratorDirective, InputFieldComponent, SelectFieldComponent, ButtonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    FormGeneratorComponent
  ],
  entryComponents: [
    InputFieldComponent,
    SelectFieldComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
