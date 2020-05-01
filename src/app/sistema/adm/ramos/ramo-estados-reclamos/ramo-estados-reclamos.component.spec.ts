import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamoEstadosReclamosComponent } from './ramo-estados-reclamos.component';

describe('RamoEstadosReclamosComponent', () => {
  let component: RamoEstadosReclamosComponent;
  let fixture: ComponentFixture<RamoEstadosReclamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamoEstadosReclamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamoEstadosReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
