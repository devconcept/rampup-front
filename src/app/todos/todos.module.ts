import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '@shared/shared.module';
import {TodosRoutingModule} from './todos-routing.module';
import {apiProvider} from './providers/api';
import {TodoListPageComponent} from './pages';
import {CreateTodoViewComponent} from './views';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    TodosRoutingModule,
  ],
  declarations: [
    TodoListPageComponent,
    CreateTodoViewComponent,
  ],
  providers: [
    apiProvider,
  ],
})
export class TodosModule {
}
