import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuComponent } from './su.component';

describe('SuComponent', () => {
  let component: SuComponent;
  let fixture: ComponentFixture<SuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
