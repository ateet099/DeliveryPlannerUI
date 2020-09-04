import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPlannerComponent } from './delivery-planner.component';

describe('DeliveryPlannerComponent', () => {
  let component: DeliveryPlannerComponent;
  let fixture: ComponentFixture<DeliveryPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
