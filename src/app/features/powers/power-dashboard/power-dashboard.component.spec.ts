import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerDashboardComponent } from './power-dashboard.component';

describe('PowerDashboardComponent', () => {
  let component: PowerDashboardComponent;
  let fixture: ComponentFixture<PowerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
