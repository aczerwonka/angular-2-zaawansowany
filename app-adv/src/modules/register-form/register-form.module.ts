import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { RouterModule } from '@angular/router';
import { RegisterService } from './services/register.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RegisterFormComponent }]),
    HttpClientModule,
    SharedModule
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterFormModule { }
