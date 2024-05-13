import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import {ContactPageComponent} from '../ContactPageMap/contact-page/contact-page.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  title = 'frontend';
  constructor(public auth: AuthService, private router: Router) {}

  protected readonly document = document;

  navigateToContactPage(){
    this.router.navigate(['/contact'])
  }

}
