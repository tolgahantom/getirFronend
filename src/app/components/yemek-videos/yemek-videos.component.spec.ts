import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YemekVideosComponent } from './yemek-videos.component';

describe('YemekVideosComponent', () => {
  let component: YemekVideosComponent;
  let fixture: ComponentFixture<YemekVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YemekVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YemekVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
