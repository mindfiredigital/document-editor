import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorMarginComponent } from './editor-margin.component';

describe('EditorMarginComponent', () => {
  let component: EditorMarginComponent;
  let fixture: ComponentFixture<EditorMarginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorMarginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
