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
    return this.tareas$
  }



}
