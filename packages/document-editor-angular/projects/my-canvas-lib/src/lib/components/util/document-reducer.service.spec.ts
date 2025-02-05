import { TestBed } from '@angular/core/testing';

import { DocumentReducerService } from './document-reducer.service';

describe('DocumentReducerService', () => {
  let service: DocumentReducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentReducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
