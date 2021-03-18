import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TodoListPageComponent } from './pages';

const routes: Routes = [
  {path: 'list', component: TodoListPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }