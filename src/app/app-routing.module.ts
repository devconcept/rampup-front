import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@core/guards';

const routes: Routes = [
  {path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule), canLoad: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
