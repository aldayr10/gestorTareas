import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrls: ['./nueva-tarea.css'],
})
export class NuevaTarea {

  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<NuevaTarea>);
  data = inject<any>(MAT_DIALOG_DATA);

  // 🔹 Form base
  form = this.fb.group({
    idTarea: [0, Validators.required],
    titulo: ['', Validators.required],
    descripcion: [''],
    idEstado: [1, Validators.required],
    idPrioridad: [1, Validators.required]
  });

  constructor() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {

    if (this.data?.tarea) {
      this.form.patchValue({
        idTarea: Number(this.data.tarea.idTarea) ?? 0,
        titulo: this.data.tarea.titulo ?? '',
        descripcion: this.data.tarea.descripcion ?? '',
        idEstado: Number(this.data.tarea.idEstado) ?? 1,
        idPrioridad: Number(this.data.tarea.idPrioridad) ?? 1,
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

    });
  }

  selectIdEstado(id: any) {
    this.form.patchValue({
      idEstado: id ?? 1,
    });
  }

  selectIdPrioridad(id: any) {

    this.form.patchValue({
      idPrioridad: parseInt(id) ?? 1,
    });
  }
}