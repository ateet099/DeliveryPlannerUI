import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpQueryComponent } from './dp-query.component';

describe('DpQueryComponent', () => {
  let component: DpQueryComponent;
  let fixture: ComponentFixture<DpQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
