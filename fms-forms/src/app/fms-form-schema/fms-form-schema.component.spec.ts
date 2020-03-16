import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsFormSchemaComponent } from './fms-form-schema.component';

describe('FmsFormSchemaComponent', () => {
  let component: FmsFormSchemaComponent;
  let fixture: ComponentFixture<FmsFormSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsFormSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmsFormSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
