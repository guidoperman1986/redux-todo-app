import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
/* import { ToggleTodoAction, EditarTotoAction, BorrarTotoAction } from '../todo.actions'; */
import * as actions from '../todo.actions';


@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {
  @Input() todo : Todo;
  @ViewChild('txtInputFisico',null) txtInputFisico:ElementRef;

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe(()=>{//para cuando se presiona el check
      this.store.dispatch(actions.toggle({id:this.todo.id,completado:!this.todo.completado}));
    })
  }

  editar(){
    this.editando = true;
    setTimeout(()=>this.txtInputFisico.nativeElement.select(),1);
  }

  terminarEdicion(){
    this.editando = false;
    //const accion = new EditarTotoAction(this.todo.id,this.txtInput.value);
    this.store.dispatch(actions.editar({id:this.todo.id,texto:this.txtInput.value}));
  }

  borrarTodo(){
    
    //const accion = new BorrarTotoAction(this.todo.id);
    this.store.dispatch(actions.borrar({id:this.todo.id}));
  }

}
