import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBerichtQuizComponent } from './error-bericht-quiz.component';

describe('ErrorBerichtQuizComponent', () => {
  let component: ErrorBerichtQuizComponent;
  let fixture: ComponentFixture<ErrorBerichtQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorBerichtQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorBerichtQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
