import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerprodhomeComponent } from './farmerprodhome.component';

describe('FarmerprodhomeComponent', () => {
  let component: FarmerprodhomeComponent;
  let fixture: ComponentFixture<FarmerprodhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerprodhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerprodhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
