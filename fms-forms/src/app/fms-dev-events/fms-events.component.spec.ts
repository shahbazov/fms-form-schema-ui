import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsEventsComponent } from './fms-events.component';

describe('FmsEventsComponent', () => {
  let component: FmsEventsComponent;
  let fixture: ComponentFixture<FmsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
