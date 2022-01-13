import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerFormComponent } from './power-form.component';

describe('PowerFormComponent', () => {
  let component: PowerFormComponent;
  let fixture: ComponentFixture<PowerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
