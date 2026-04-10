import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from "../../services/auth-service";


@Component({
  selector: 'app-login',
   imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService:AuthService
  ) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)] ]
    });

  }

  ngOnInit(): void {
    const token= localStorage.getItem('user');

    if (token) {
      const idUser = token ? JSON.parse(token).idUser : null;
  
      this.router.navigate(['/gestor-tareas']);
    } 
  }

  onSubmit() {

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const success = this.authService.login(email, password);
      if (success) {
        this.router.navigate(['gestor-tareas']);
      } else {
        alert('Email o contraseña incorrectos');
      }

    } else {

      this.loginForm.markAllAsTouched();

    }

  }

  registrarse() {
    this.router.navigate(['/register']);
  }

}