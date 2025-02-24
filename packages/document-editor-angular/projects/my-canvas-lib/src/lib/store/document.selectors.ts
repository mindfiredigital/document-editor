import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DocumentState } from './document.reducer';

export const selectDocumentState =
  createFeatureSelector<DocumentState>('document');

export const selectDocumentMargins = createSelector(
  selectDocumentState,
  (state: DocumentState) => state?.margins
);
