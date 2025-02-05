import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSliderHorizontalComponent } from './custom-slider-horizontal.component';

describe('CustomSliderHorizontalComponent', () => {
  let component: CustomSliderHorizontalComponent;
  let fixture: ComponentFixture<CustomSliderHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSliderHorizontalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomSliderHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
