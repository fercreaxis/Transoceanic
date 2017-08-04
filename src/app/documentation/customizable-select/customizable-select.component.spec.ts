import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizableSelectComponent } from './customizable-select.component';

describe('CustomizableSelectComponent', () => {
  let component: CustomizableSelectComponent;
  let fixture: ComponentFixture<CustomizableSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizableSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizableSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
