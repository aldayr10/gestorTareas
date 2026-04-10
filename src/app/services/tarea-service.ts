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
  consecutivo:number=2;
  constructor(){
    
  }
  obternerTodasLasTareas(){
    this.tareaSubject.next([...this.tareas])
  }
  agregarTarea(tarea:Tarea){
    this.consecutivo=this.consecutivo+1;
    tarea.idTarea=this.consecutivo
    console.log(tarea);
    
    this.tareas.push(tarea)
    this.tareaSubject.next([...this.tareas])
  }

  actualizarTarea(tarea:Tarea){
    console.log(tarea);
    
    this.tareas=this.tareas.map(t =>
      t.idTarea === tarea.idTarea ? tarea : t
    );
  console.log(this.tareas);
  
  this.tareaSubject.next([...this.tareas])
  }

  eliminarTarea(id:number){
  this.tareas=this.tareas.filter(t => t.idTarea !== id);
  this.tareaSubject.next([...this.tareas])
  }

}
