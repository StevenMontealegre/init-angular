import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './../user/user-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    SignInComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule
  ]
})
export class UserModule { }
