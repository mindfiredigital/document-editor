import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSliderVerticalComponent } from './custom-slider-vertical.component';

describe('CustomSliderVerticalComponent', () => {
  let component: CustomSliderVerticalComponent;
  let fixture: ComponentFixture<CustomSliderVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSliderVerticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomSliderVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
