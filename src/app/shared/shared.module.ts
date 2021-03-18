import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipPopupComponent} from './components';
import {TooltipDirective} from './directives';
import {ThemeModule} from '../theme/theme.module';

@NgModule({
  declarations: [
    TooltipPopupComponent,
    TooltipDirective,
  ],
  imports: [
    CommonModule,
    ThemeModule,
  ],
  exports: [
    ThemeModule,
    TooltipPopupComponent,
    TooltipDirective,
  ],
})
export class SharedModule {
}
