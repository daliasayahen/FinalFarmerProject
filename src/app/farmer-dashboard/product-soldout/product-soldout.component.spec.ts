import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSoldoutComponent } from './product-soldout.component';

describe('ProductSoldoutComponent', () => {
  let component: ProductSoldoutComponent;
  let fixture: ComponentFixture<ProductSoldoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSoldoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSoldoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
