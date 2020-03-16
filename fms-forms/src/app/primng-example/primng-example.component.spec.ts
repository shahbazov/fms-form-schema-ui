import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimngExampleComponent } from './primng-example.component';

describe('PrimngExampleComponent', () => {
  let component: PrimngExampleComponent;
  let fixture: ComponentFixture<PrimngExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimngExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimngExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
