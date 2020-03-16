import { createReducer,on } from '@ngrx/store';
import { setFiltro } from './filter.actions';
import * as fromFiltro from './filter.actions'

const estadoInicial: fromFiltro.filtrosValidos = 'todos';

const _filtroReducer = createReducer(estadoInicial,
    on(setFiltro,(state,{filtro})=> filtro )
)

export function filtroReducer(state,action){
    return _filtroReducer(state,action)
}

/* const estadoInicial: fromFiltro.filtrosValidos = 'todos';

export function filtroReducer(state=estadoInicial,action:fromFiltro.acciones):fromFiltro.filtrosValidos{
    switch(action.type){
        case fromFiltro.SET_FILTRO:
            return action.filtro;

        default:
            return state;
    }
} */