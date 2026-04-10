import { Component } from '@angular/core';
import { TareaService } from '../../services/tarea-service';
import { combineLatest, map, BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CatEstadoService } from '../../services/cat-estado-service';
import { CatPrioridadesService } from '../../services/cat-prioridades-service';
import { NuevaTarea } from './nueva-tarea/nueva-tarea';
import { EliminarTarea } from './eliminar-tarea/eliminar-tarea';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gestor-tareas',
  imports: [CommonModule],
  templateUrl: './gestor-tareas.html',
  styleUrl: './gestor-tareas.css',
})
export class GestorTareas {
  private tareaVista = new BehaviorSubject<any[]>([])
  tareasVista$ = this.tareaVista.asObservable()


  constructor(
    private tareaService: TareaService,
    private estadoService: CatEstadoService,
    private prioridadService: CatPrioridadesService,
    private dialog: MatDialog
  ) {
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

  nuevaTarea() {
    const ref = this.dialog.open(NuevaTarea, {
      width: '400px',
      data: {
        estados: this.estadoService.estados$.value,
        prioridades: this.prioridadService.prioridades$.value
      }
    });

    ref.afterClosed().subscribe(result => {
      if (result) {
        this.tareaService.agregarTarea(result);
      }
    });

  }

  cambiarEstado(tarea: any) {
    let nuevoEstado = tarea.idEstado;

    if (tarea.idEstado === 1) {
      nuevoEstado = 2;
    } else if (tarea.idEstado === 2) {
      nuevoEstado = 3;
    }

    let tareaActualizada = {
      ...tarea,
      idEstado: nuevoEstado
    };

    this.tareaService.actualizarTarea(tareaActualizada);
  }

  editarTarea(tarea: any) {
    const ref = this.dialog.open(NuevaTarea, {
      width: '400px',
      data: {
        tarea: tarea,
        estados: this.estadoService.estados$.value,
        prioridades: this.prioridadService.prioridades$.value
      }
    });

    ref.afterClosed().subscribe(result => {
      if (result) {
        this.tareaService.actualizarTarea(result);
      }
    });
  }

  eliminarTarea(tarea: any) {
    const ref = this.dialog.open(EliminarTarea, {
      width: '300px',
      data: { tarea }
    });

    ref.afterClosed().subscribe(confirmado => {
      if (confirmado) {
        this.tareaService.eliminarTarea(tarea.idTarea);
      }
    });
  }
}
