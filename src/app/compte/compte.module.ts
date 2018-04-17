
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompteRoutingModule } from './compte-routing.module';
import { CompteListComponent } from './compte-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CompteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CompteListComponent],
 
})
export class CompteModule { }