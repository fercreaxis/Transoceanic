import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamoCoberturasComponent } from './ramo-coberturas.component';

describe('RamoCoberturasComponent', () => {
  let component: RamoCoberturasComponent;
  let fixture: ComponentFixture<RamoCoberturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamoCoberturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamoCoberturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
