import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpResultsComponent } from './dp-results.component';

describe('DpResultsComponent', () => {
  let component: DpResultsComponent;
  let fixture: ComponentFixture<DpResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
