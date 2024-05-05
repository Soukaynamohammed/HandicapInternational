import { NgModule } from '@angular/core';
import { AuthGuard } from '@auth0/auth0-angular';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
