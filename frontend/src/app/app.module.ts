import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile.component';
import { SideBarComponent } from './LoginMap/side-bar/side-bar.component';
import { LoginComponent } from './LoginMap/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard, AuthModule } from '@auth0/auth0-angular';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './DashboardMap/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { ChapterButtonComponent } from './DashboardMap/chapter-button/chapter-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ChapterComponent } from './ChaptersMap/chapter/chapter.component';
import { GameComponent } from './ChaptersMap/game/game.component';
import { LessenComponent } from './ChaptersMap/lessen/lessen.component';
import { QuizComponent } from './QuizMap/quiz/quiz.component';
import { ContactPageComponent } from './ContactPageMap/contact-page/contact-page.component';
import { QuizCardComponent } from './QuizMap/quiz-card/quiz-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SideBarComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    ChapterButtonComponent,
    ChapterComponent,
    GameComponent,
    LessenComponent,
    QuizComponent,
    ContactPageComponent,
    QuizCardComponent
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
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'chapter/:id', component: ChapterComponent },
      { path: 'quiz/:id', component: QuizComponent },
      { path: 'contact', component: ContactPageComponent}
    ]),
    CommonModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
