import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrls: ['./nueva-tarea.css'],
})
export class NuevaTarea {

  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<NuevaTarea>);
  data = inject<any>(MAT_DIALOG_DATA);

  // 🔹 Form base
  form = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: [''],
    idEstado: [null, Validators.required],
    idPrioridad: [null, Validators.required]
  });

  constructor() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {

    if (this.data?.tarea) {
      this.form.patchValue({
        titulo: this.data.tarea.titulo ?? '',
        descripcion: this.data.tarea.descripcion ?? '',
        idEstado: this.data.tarea.idEstado ?? null,
        idPrioridad: this.data.tarea.idPrioridad ?? null
      });
    }

  }

  cerrar() {
    this.dialogRef.close();
  }

  guardar() {
    if (this.form.invalid) return;

    this.dialogRef.close({
      ...this.form.value,
      idTarea: this.data?.tarea?.idTarea 
    });
  }
}