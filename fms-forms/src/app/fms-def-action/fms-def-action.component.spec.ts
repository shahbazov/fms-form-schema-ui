import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsDefActionComponent } from './fms-def-action.component';

describe('FmsDefActionComponent', () => {
  let component: FmsDefActionComponent;
  let fixture: ComponentFixture<FmsDefActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsDefActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmsDefActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
