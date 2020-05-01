import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradoraEditComponent } from './aseguradora-edit.component';

describe('AseguradoraEditComponent', () => {
  let component: AseguradoraEditComponent;
  let fixture: ComponentFixture<AseguradoraEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseguradoraEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguradoraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
