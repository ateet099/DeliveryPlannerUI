import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpMapComponent } from './dp-map.component';

describe('DpMapComponent', () => {
  let component: DpMapComponent;
  let fixture: ComponentFixture<DpMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
