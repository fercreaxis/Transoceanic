import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradorasComponent } from './aseguradoras.component';

describe('AseguradorasComponent', () => {
  let component: AseguradorasComponent;
  let fixture: ComponentFixture<AseguradorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseguradorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguradorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
