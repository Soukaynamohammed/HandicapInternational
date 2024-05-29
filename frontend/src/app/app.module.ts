import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { ResultsComponent } from './QuizMap/results/results.component';
import { ResultCardComponent } from './QuizMap/result-card/result-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorBerichtQuizComponent } from './QuizMap/error-bericht-quiz/error-bericht-quiz.component';
import { BaseDialogComponent } from './base-dialog/base-dialog.component';


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
    QuizCardComponent,
    ResultsComponent,
    ResultCardComponent,
    ErrorBerichtQuizComponent,
    BaseDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule,
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
      { path: 'contact', component: ContactPageComponent},
      { path: 'results/:id', component: ResultsComponent, canActivate: [AuthGuard]},
      { path: 'quiz/:id', redirectTo: 'results/:id' },
    ]),
    CommonModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  bootstrap: [AppComponent]
})
export class AppModule { }
