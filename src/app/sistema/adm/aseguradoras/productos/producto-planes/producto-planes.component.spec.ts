import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoPlanesComponent } from './producto-planes.component';

describe('ProductoPlanesComponent', () => {
  let component: ProductoPlanesComponent;
  let fixture: ComponentFixture<ProductoPlanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoPlanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
