import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LayoutComponent, SidebarComponent} from './components';
import {HomePageComponent, NotFoundPageComponent, LoginPageComponent} from './pages';
import {ThemeModule} from '@theme/theme.module';
import {CoreRoutingModule} from './core-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
  ],
  exports: [
    LayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoreModule {
}
