import { TestBed } from '@angular/core/testing';

import { CanvasEditorService } from './canvas-editor.service';

describe('CanvasEditorService', () => {
  let service: CanvasEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
