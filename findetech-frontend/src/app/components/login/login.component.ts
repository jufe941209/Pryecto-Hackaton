import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
  })
  export class LoginComponent {
    loginForm: FormGroup;
    showPassword: boolean = false;
    verificationCodeSent: boolean = false;
    correctCode: string = '123456'; // Código de verificación simulado
  
    constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        verificationCode: ['', Validators.required]
      });
    }
  
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  
    sendVerificationCode() {
      this.verificationCodeSent = true;
      console.log('Código de verificación enviado: 123456');
    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        if (this.loginForm.value.verificationCode === this.correctCode) {
          console.log('Inicio de sesión exitoso');
        } else {
          console.log('Código de verificación incorrecto');
        }
      } else {
        console.log('Formulario inválido');
      }
    }
  }