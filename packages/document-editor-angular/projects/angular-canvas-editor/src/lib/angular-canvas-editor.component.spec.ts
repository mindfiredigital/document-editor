import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCanvasEditorComponent } from './angular-canvas-editor.component';

describe('AngularCanvasEditorComponent', () => {
  let component: AngularCanvasEditorComponent;
  let fixture: ComponentFixture<AngularCanvasEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularCanvasEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularCanvasEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
