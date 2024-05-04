import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-profile',
  template: `
  `
})
export class ProfileComponent {
  constructor(public auth: AuthService) {}
}
