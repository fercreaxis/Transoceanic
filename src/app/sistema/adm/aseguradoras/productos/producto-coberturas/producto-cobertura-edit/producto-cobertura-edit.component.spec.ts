import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCoberturaEditComponent } from './producto-cobertura-edit.component';

describe('ProductoCoberturaEditComponent', () => {
  let component: ProductoCoberturaEditComponent;
  let fixture: ComponentFixture<ProductoCoberturaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoCoberturaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCoberturaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
