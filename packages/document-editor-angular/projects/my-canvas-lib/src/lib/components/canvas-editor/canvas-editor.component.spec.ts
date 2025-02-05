import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasEditorComponent } from './canvas-editor.component';

describe('CanvasEditorComponent', () => {
  let component: CanvasEditorComponent;
  let fixture: ComponentFixture<CanvasEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
