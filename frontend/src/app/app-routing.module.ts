import { NgModule } from '@angular/core';
import { AuthGuard } from '@auth0/auth0-angular';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './LoginMap/login/login.component';
import { DashboardComponent } from './DashboardMap/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }