import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamoEditComponent } from './ramo-edit.component';

describe('RamoEditComponent', () => {
  let component: RamoEditComponent;
  let fixture: ComponentFixture<RamoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
