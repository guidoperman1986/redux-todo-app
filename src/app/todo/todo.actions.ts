import { createAction, props } from '@ngrx/store';

/* import { Action } from '@ngrx/store'; */

export const crear = createAction(
    '[TODO] Crear todo',
    props<{texto:string}>()
)
export const borrar = createAction(
    '[TODO] Borrar todo',
    props<{id:number}>()
)
export const editar = createAction(
    '[TODO] Editar todo',
    props<{id:number,texto:string}>()
)

export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{id:number,completado:boolean}>()
)

export const toggleTodos = createAction(
    '[TODO] Toggle todos',
    props<{completado:boolean}>()
)

export const borrarCompletados = createAction(
    '[TODO] Borrar todos completados'
)

/* 
export const AGREGAR_TODOS    = '[TODO] Agregar Todo';
export const TOGGLE_TODOS     = '[TODO] Toggle Todo';
export const TOGGLE_ALL_TODOS = '[TODO] Toggle All Todos';
export const EDITAR_TODOS     = '[TODO] Editar Todo';
export const BORRAR_TODOS     = '[TODO] Borrar Todo';
export const BORRAR_COMPLETED_TODOS     = '[TODO] Borrar Todos Completados';

export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODOS;

    constructor(public texto:string){}
}

export class ToggleTodoAction implements Action{
    readonly type = TOGGLE_TODOS;

    constructor(public id:number){}
}

export class EditarTotoAction implements Action{
    readonly type = EDITAR_TODOS;

    constructor(public id:number,public texto:string){}
}

export class BorrarTotoAction implements Action{
    readonly type = BORRAR_TODOS;

    constructor(public id:number){}
}

export class BorrarTodoCompletedAction implements Action{
    readonly type = BORRAR_COMPLETED_TODOS;

    
}

export class ToggleAllTodoAction implements Action{
    readonly type = TOGGLE_ALL_TODOS;

    constructor(public completado:boolean){}
}


export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTotoAction | BorrarTotoAction | ToggleAllTodoAction | BorrarTodoCompletedAction; */