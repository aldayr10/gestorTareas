import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';
import { Tareas } from '../assets/tareas';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private tareas:Tarea[]=Tareas
  private tareaSubject=new BehaviorSubject<Tarea[]>([])
  tareas$=this.tareaSubject.asObservable()
  constructor(){
    
  }
  obternerTodasLasTareas(){
    this.tareaSubject.next([...this.tareas])
  }
  agregarTarea(tarea:Tarea){
    this.tareas.push(tarea)
    this.tareaSubject.next([...this.tareas])
  }

  actualizarTarea(tarea:Tarea){
  this.tareas=this.tareas.map(t =>
    t.idTarea === tarea.idTarea ? tarea : t
  );
    
  this.tareaSubject.next([...this.tareas])
  }

  eliminarTarea(){
    
  }

}
