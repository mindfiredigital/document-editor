import { TestBed } from '@angular/core/testing';

import { AngularCanvasEditorService } from './angular-canvas-editor.service';

describe('AngularCanvasEditorService', () => {
  let service: AngularCanvasEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCanvasEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
