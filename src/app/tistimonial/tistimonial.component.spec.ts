import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TistimonialComponent } from './tistimonial.component';

describe('TistimonialComponent', () => {
  let component: TistimonialComponent;
  let fixture: ComponentFixture<TistimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TistimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TistimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
