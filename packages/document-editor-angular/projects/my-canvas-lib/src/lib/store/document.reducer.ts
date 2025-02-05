import { Action, createReducer, on } from '@ngrx/store';
import { DocumentState, initialState } from './document.state';
import { setDocumentTitle, reloadRecentDoc, setDocumentMargins, setDocumentId } from './document.actions';

export const documentReducer = createReducer(
  initialState,
  on(setDocumentTitle, (state, { title }) => ({
    ...state,
    title
  })),
  on(reloadRecentDoc, (state, { reloadRecentDoc }) => ({
    ...state,
    reloadRecentDoc
  })),
  on(setDocumentMargins, (state, { margins }) => ({
    ...state,
    margins
  })),
  on(setDocumentId, (state, { documentId }) => ({
    ...state,
    documentId
  }))
);
