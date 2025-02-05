import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginRulerComponent } from './margin-ruler.component';

describe('MarginRulerComponent', () => {
  let component: MarginRulerComponent;
  let fixture: ComponentFixture<MarginRulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarginRulerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarginRulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
