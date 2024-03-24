import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { constants } from '../../../constants/constants';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['user@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onLogin() {
    this.isSubmitted = true;
    //console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value ?? '';
      const password = this.loginForm.get('password')?.value ?? '';

      const result = await this.authService.login(email, password);
      if (result) {
        this.router.navigate([constants.routes.dashboard]);
      } else {
        alert('Invalid credentials');
        this.loginForm.reset();
      }
    }
  }
}
