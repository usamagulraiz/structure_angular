import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    LoginSignupRoutingModule
  ]
})
export class LoginSignupModule { }
