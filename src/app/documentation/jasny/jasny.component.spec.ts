import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasnyComponent } from './jasny.component';

describe('JasnyComponent', () => {
  let component: JasnyComponent;
  let fixture: ComponentFixture<JasnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
