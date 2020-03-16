import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsFunctionComponent } from './fms-function.component';

describe('FmsFunctionComponent', () => {
  let component: FmsFunctionComponent;
  let fixture: ComponentFixture<FmsFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmsFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmsFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
