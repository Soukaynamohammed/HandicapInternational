import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmineDialogComponent } from './landmine-dialog.component';

describe('LandmineDialogComponent', () => {
  let component: LandmineDialogComponent;
  let fixture: ComponentFixture<LandmineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandmineDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandmineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
