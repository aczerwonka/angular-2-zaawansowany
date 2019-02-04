import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RegisterFormComponent }])
  ]
})
export class RegisterFormModule { }
