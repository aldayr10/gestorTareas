import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-tarea',
  imports: [],
  templateUrl: './eliminar-tarea.html',
  styleUrl: './eliminar-tarea.css',
})


export class EliminarTarea  {

  private dialogRef = inject(MatDialogRef<EliminarTarea>);
  data = inject(MAT_DIALOG_DATA);

  cancelar() {
    this.dialogRef.close(false);
  }

  confirmar() {
    this.dialogRef.close(true);
  }
}