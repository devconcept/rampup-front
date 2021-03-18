import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent, SidebarComponent} from './components';
import {HomePageComponent, NotFoundPageComponent} from './pages';
import {ThemeModule} from '@theme/theme.module';
import {CoreRoutingModule} from './core-routing.module';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HomePageComponent,
    NotFoundPageComponent,
  ],
  exports: [
    LayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    CoreRoutingModule
  ]
})
export class CoreModule {
}
