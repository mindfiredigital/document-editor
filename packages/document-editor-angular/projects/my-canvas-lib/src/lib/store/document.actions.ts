import { createAction, props } from '@ngrx/store';

export const setDocumentMargins = createAction(
  '[Document] Set Margins',
  props<{ margins: number[] }>()
);
