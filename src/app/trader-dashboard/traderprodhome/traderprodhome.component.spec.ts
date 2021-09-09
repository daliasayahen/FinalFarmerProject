import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderprodhomeComponent } from './traderprodhome.component';

describe('TraderprodhomeComponent', () => {
  let component: TraderprodhomeComponent;
  let fixture: ComponentFixture<TraderprodhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraderprodhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderprodhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
