import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsiComponent } from './carsi.component';

describe('CarsiComponent', () => {
  let component: CarsiComponent;
  let fixture: ComponentFixture<CarsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
