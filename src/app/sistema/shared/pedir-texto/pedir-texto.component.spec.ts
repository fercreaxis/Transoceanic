import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirTextoComponent } from './pedir-texto.component';

describe('PedirTextoComponent', () => {
  let component: PedirTextoComponent;
  let fixture: ComponentFixture<PedirTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedirTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
