import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea-service';
import { combineLatest, map, BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CatEstadoService } from '../../services/cat-estado-service';
import { CatPrioridadesService } from '../../services/cat-prioridades-service';

@Component({
  selector: 'app-gestor-tareas',
  imports: [CommonModule],
  templateUrl: './gestor-tareas.html',
  styleUrl: './gestor-tareas.css',
})
export class GestorTareas {
  private tareaVista = new BehaviorSubject<any[]>([])
  tareasVista$ = this.tareaVista.asObservable()
  

  constructor(private tareaService: TareaService,private estadoService:CatEstadoService,private prioridadService:CatPrioridadesService) {
    tareaService.obternerTodasLasTareas()
    this.tareasVista$ = combineLatest([
      this.tareaService.tareas$,
      this.estadoService.estados$,
      this.prioridadService.prioridades$
    ]).pipe(
      map(([tareas, estados, prioridades]) => {
        return tareas.map(t => ({
          ...t,
          estadoNombre: estados.find(e => e.id === t.idEstado)?.nombre,
          prioridadNombre: prioridades.find(p => p.id === t.idPrioridad)?.nombre
        }));
      })
    );

    console.log(this.tareasVista$);
    
  }




}
