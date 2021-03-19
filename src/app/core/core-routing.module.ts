import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent, NotFoundPageComponent, LoginPageComponent} from './pages';
import {AuthGuard} from './guards';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
