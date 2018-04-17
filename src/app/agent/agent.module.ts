
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentRoutingModule } from './agent-routing.module';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AgentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AgentListComponent, AgentDetailComponent]
})
export class AgentModule { }