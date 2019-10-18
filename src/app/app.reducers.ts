import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer'
import * as fromFiltroActions from './filter/filter.actions'

export interface AppState{
    todos:Todo[];
    filtro:fromFiltroActions.filtrosValidos;
}

//combino todos los reducers que tiene la app
export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: fromFiltro.filtroReducer
}
