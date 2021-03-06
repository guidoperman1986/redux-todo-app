import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos:fromFiltro.filtrosValidos[] = ['todos','completados','pendientes']
  filtroActual:string;
  pendientes:number;


  constructor(public store:Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state=>{
        this.contarPendientes(state.todos)
        this.filtroActual = state.filtro
    })
  }

  cambiarFiltro(nuevoFiltro:fromFiltro.filtrosValidos){
    //const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(fromFiltro.setFiltro({filtro:nuevoFiltro}));
  }

  contarPendientes(todos:Todo[]){
    this.pendientes = todos.filter(todo=>!todo.completado).length
  }

  limpiarCompletados(){
    //const accion = new fromTodo.BorrarTodoCompletedAction()
    this.store.dispatch(fromTodo.borrarCompletados())

  }
}
