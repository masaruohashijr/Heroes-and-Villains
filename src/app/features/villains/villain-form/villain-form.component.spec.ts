import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainFormComponent } from './villain-form.component';

describe('VillainFormComponent', () => {
  let component: VillainFormComponent;
  let fixture: ComponentFixture<VillainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillainFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
