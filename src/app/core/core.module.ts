import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HomePageComponent, NotFoundPageComponent, LoginPageComponent} from './pages';
import {CoreRoutingModule} from './core-routing.module';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
  ],
  exports: [],
  imports: [
    SharedModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoreModule {
}
