import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsAutoCompleteComponent } from './fms-auto-complete.component';

describe('FmsAutoCompleteComponent', () => {
  let component: FmsAutoCompleteComponent;
  let fixture: ComponentFixture<FmsAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmsAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
