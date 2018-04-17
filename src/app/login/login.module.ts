
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ AuthentificationComponent]
})
export class LoginModule { }
