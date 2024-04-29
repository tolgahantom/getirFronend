import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyukComponent } from './buyuk.component';

describe('BuyukComponent', () => {
  let component: BuyukComponent;
  let fixture: ComponentFixture<BuyukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyukComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
