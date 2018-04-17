import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteListComponent} from './compte-list.component';

const routes: Routes = [
{path: 'compte', component: CompteListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteRoutingModule { }