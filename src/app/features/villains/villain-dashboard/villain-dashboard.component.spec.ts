import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainDashboardComponent } from './villain-dashboard.component';

describe('VillainDashboardComponent', () => {
  let component: VillainDashboardComponent;
  let fixture: ComponentFixture<VillainDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillainDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
