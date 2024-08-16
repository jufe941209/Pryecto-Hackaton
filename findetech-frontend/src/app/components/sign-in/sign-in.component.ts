import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  signUpForm: FormGroup;
  verificationCodeSent: boolean = false;
  verificationCodeError: boolean = false;
  correctCode: string = '123456';

  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      lastName2: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      document: ['', Validators.required],
      docNumber: ['', Validators.required],
      type: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      acceptTerms: [false, Validators.requiredTrue],
      verificationCode: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  sendVerificationCode() {
    this.verificationCodeSent = true;
    this.verificationCodeError = false;
    console.log('Código de verificación enviado: 123456');
  }

  onRegister() {
    console.log('onRegister llamado');

    if (this.signUpForm.invalid) {
      this.markAllAsTouched();
      let errorMessage = 'Debe completar todos los campos.';
      
      if (this.signUpForm.get('acceptTerms')?.invalid) {
        errorMessage = 'Debe aceptar los términos y condiciones';
      } else if (this.signUpForm.errors && this.signUpForm.errors['mismatch']) {
        errorMessage = 'Las contraseñas no coinciden.';
      }
      
      alert(errorMessage);
      return;
    }
    
    if (this.verificationCodeSent && !this.signUpForm.value.verificationCode) {
      this.verificationCodeError = true;
      alert('Debes completar el código de verificación antes de continuar.');
      return;
    }

    if (this.verificationCodeSent && this.signUpForm.value.verificationCode !== this.correctCode) {
      alert('Código de verificación incorrecto.');
      return;
    }
    
    console.log('Registro exitoso');
    this.router.navigate(['/encuesta1']);
  }

  private markAllAsTouched() {
    Object.values(this.signUpForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}