import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamoVariablesComponent } from './ramo-variables.component';

describe('RamoVariablesComponent', () => {
  let component: RamoVariablesComponent;
  let fixture: ComponentFixture<RamoVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamoVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamoVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
