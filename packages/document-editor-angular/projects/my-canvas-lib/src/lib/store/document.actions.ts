import { createAction, props } from '@ngrx/store';

export const setDocumentTitle = createAction(
  '[Document] Set Title',
  props<{ title: string }>()
);

export const reloadRecentDoc = createAction(
  '[Document] Reload Recent Document',
  props<{ reloadRecentDoc: boolean }>()
);

export const setDocumentMargins = createAction(
  '[Document] Set Margins',
  props<{ margins: number[] }>()
);

export const setDocumentId = createAction(
  '[Document] Set Document ID',
  props<{ documentId: string }>()
);
