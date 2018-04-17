import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentListComponent} from './agent-list/agent-list.component';
import { AgentDetailComponent} from './agent-detail/agent-detail.component';


const routes: Routes = [
{path: 'agent', component: AgentListComponent},
{path: 'agent/create',component:AgentDetailComponent},
{path: 'agent/edit/:id', component:AgentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }