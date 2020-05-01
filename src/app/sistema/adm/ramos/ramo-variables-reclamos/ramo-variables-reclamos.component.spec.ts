import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamoVariablesReclamosComponent } from './ramo-variables-reclamos.component';

describe('RamoVariablesReclamosComponent', () => {
  let component: RamoVariablesReclamosComponent;
  let fixture: ComponentFixture<RamoVariablesReclamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamoVariablesReclamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamoVariablesReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
