import { createReducer,on } from '@ngrx/store';
import { crear, borrar, editar, toggle, toggleTodos, borrarCompletados } from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Devolve la bolsa');
const todo2 = new Todo('El cabo se enojo');
const todo3 = new Todo('A full la mandibula');


export const initialState:Todo[] = [
    todo1,todo2,todo3
];

const _todoReducer = createReducer(initialState,
        on(crear, (state, {texto}) => [...state, new Todo(texto)]),    
        on(borrar, (state, {id}) => state.filter(todo=>todo.id != id)),    
        on(editar, (state, {id,texto}) => state.map(todo=>{
            if (todo.id == id){
                return {
                    ...todo,
                    texto: texto
                }
            }else{
                return todo;
            }
        })),
        on(toggle, (state, {id,completado}) => state.map(todo=>{
            if (todo.id == id){
                return {
                    ...todo,
                    completado
                }
            }else{
                return todo;
            }
        })),
        on(toggleTodos,(state,{completado})=> state.map(todo=>{
                return {
                    ...todo,
                    completado
                }
            })
        ),
        on(borrarCompletados,(state)=>state.filter(todo=>todo.completado != true))    
)

export function todoReducer(state,action){
    return _todoReducer(state,action)
}

/* 




import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';


const todo1 = new Todo('Devolve la bolsa');
const todo2 = new Todo('El cabo se enojo');
const todo3 = new Todo('A full la mandibula');

todo2.completado = true

const estadoInicial : Todo[] = [todo1,todo2,todo3];

export function todoReducer(state=estadoInicial,action:fromTodo.Acciones):Todo[]{
    switch(action.type){
        case fromTodo.AGREGAR_TODOS:
            const todo = new Todo(action.texto);
            return [...state,todo]

        case fromTodo.TOGGLE_TODOS:
            return state.map(todoEdit=>{
                if (todoEdit.id == action.id){
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    }
                }else{
                    return todoEdit;
                }
        })

        case fromTodo.TOGGLE_ALL_TODOS:
            return state.map(todoEdit=>{
                return{
                    ...todoEdit,
                    completado: action.completado
                }
           })
 
        case fromTodo.EDITAR_TODOS:
            return state.map(todoEdit=>{
                if (todoEdit.id == action.id){
                    console.log(action.texto)
                    return {
                        ...todoEdit,
                        texto: action.texto
                    }
                }else{
                    return todoEdit;
                }
            })

        case fromTodo.BORRAR_TODOS:
            return state.filter(todoEdit=> todoEdit.id != action.id)

        case fromTodo.BORRAR_COMPLETED_TODOS:
            return state.filter(todoEdit=> todoEdit.completado == false)

        default:
            return state;
    }
} */