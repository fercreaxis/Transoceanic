import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaColectivaEditComponent } from './poliza-colectiva-edit.component';

describe('PolizaColectivaEditComponent', () => {
  let component: PolizaColectivaEditComponent;
  let fixture: ComponentFixture<PolizaColectivaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaColectivaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaColectivaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
