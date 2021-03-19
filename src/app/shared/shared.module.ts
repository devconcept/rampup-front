import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent, SidebarComponent, TooltipPopupComponent} from './components';
import {TooltipDirective} from './directives';
import {ThemeModule} from '@theme/theme.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    TooltipPopupComponent,
    TooltipDirective,
    LayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    TooltipPopupComponent,
    TooltipDirective,
    LayoutComponent,
    SidebarComponent,
  ],
})
export class SharedModule {
}
