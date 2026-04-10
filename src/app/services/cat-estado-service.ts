import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatEstadoService {
  estados$ = new BehaviorSubject<any[]>([
  { id: 1, nombre: 'Pendiente' },
  { id: 2, nombre: 'En Progreso' },
  { id: 3, nombre: 'Completada' }
]);
}
