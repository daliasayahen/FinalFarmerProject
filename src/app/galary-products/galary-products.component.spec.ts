import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaryProductsComponent } from './galary-products.component';

describe('GalaryProductsComponent', () => {
  let component: GalaryProductsComponent;
  let fixture: ComponentFixture<GalaryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalaryProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
