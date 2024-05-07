import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  
})
export class LoginComponent {
  title = 'frontend';
  constructor(private router: Router,public auth: AuthService) {}
  protected readonly document = document;

  loginSuccess() {
    this.router.navigate(['/dashboard']);
  }
  
}
