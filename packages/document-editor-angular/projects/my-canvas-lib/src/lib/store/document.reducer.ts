import { createReducer, on } from '@ngrx/store';
import { setDocumentMargins } from './document.actions';

export interface DocumentState {
  margins: number[];
}

const initialState: DocumentState = {
  margins: [], // Default margins
};

export const documentReducer = createReducer(
  initialState,
  on(setDocumentMargins, (state, { margins }) => ({
    ...state,
    margins,
  }))
);
