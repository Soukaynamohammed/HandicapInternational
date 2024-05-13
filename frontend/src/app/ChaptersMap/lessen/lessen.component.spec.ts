import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessenComponent } from './lessen.component';

describe('LessenComponent', () => {
  let component: LessenComponent;
  let fixture: ComponentFixture<LessenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LessenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
