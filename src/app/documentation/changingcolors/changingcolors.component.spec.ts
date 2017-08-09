import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingcolorsComponent } from './changingcolors.component';

describe('ChangingcolorsComponent', () => {
  let component: ChangingcolorsComponent;
  let fixture: ComponentFixture<ChangingcolorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangingcolorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangingcolorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
