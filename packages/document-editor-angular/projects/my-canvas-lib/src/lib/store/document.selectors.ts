import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DocumentState } from './document.state';

export const selectDocumentState = createFeatureSelector<DocumentState>('document');

export const selectDocumentTitle = createSelector(
  selectDocumentState,
  (state: DocumentState) => state.title
);

export const selectDocumentMargins = createSelector(
  selectDocumentState,
  (state: DocumentState) => state.margins
);

export const selectDocumentId = createSelector(
  selectDocumentState,
  (state: DocumentState) => state.documentId
);
