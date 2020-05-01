import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosInlineComponent } from './contactos-inline.component';

describe('ContactosInlineComponent', () => {
  let component: ContactosInlineComponent;
  let fixture: ComponentFixture<ContactosInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactosInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
