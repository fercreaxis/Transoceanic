import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCoberturasComponent } from './producto-coberturas.component';

describe('ProductoCoberturasComponent', () => {
  let component: ProductoCoberturasComponent;
  let fixture: ComponentFixture<ProductoCoberturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoCoberturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCoberturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
