import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthModule } from '@auth0/auth0-angular';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SideBarComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'dev-xm0bfaw617xwcgcw.eu.auth0.com',
      clientId: 'gmWPJzZPm92whotuHN7v4pneZKQVgiF6',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    RouterModule.forRoot([
      {path: "", component: LoginComponent},
      {path: "dashboard", component: DashboardComponent}
    ]),
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
