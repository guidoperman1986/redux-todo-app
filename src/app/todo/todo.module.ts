import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodosItemComponent } from './todos-item/todos-item.component';
import { TodosListComponent } from './todos-list/todos-list.component';

@NgModule({
  declarations: [
    /* TodosListComponent,
    TodosItemComponent,
    TodoFooterComponent,
    TodoAddComponent, */
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
