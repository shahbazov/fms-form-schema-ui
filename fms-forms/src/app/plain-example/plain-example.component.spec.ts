import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainExampleComponent } from './plain-example.component';




describe('PlainExampleComponent', () => {
  let component: PlainExampleComponent;
  let fixture: ComponentFixture<PlainExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
