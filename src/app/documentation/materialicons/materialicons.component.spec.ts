import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialiconsComponent } from './materialicons.component';

describe('MaterialiconsComponent', () => {
  let component: MaterialiconsComponent;
  let fixture: ComponentFixture<MaterialiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
