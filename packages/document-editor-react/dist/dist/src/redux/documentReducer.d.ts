export interface DocumentState {
  documentId: string;
  title: string;
  reloadRecentDoc: boolean;
  margins: number[];
}
export declare const setDocumentTitle: import('@reduxjs/toolkit').ActionCreatorWithPayload<
    any,
    'document/setDocumentTitle'
  >,
  reloadRecentDoc: import('@reduxjs/toolkit').ActionCreatorWithPayload<
    any,
    'document/reloadRecentDoc'
  >,
  setDocumentId: import('@reduxjs/toolkit').ActionCreatorWithPayload<
    any,
    'document/setDocumentId'
  >,
  setDocumentMargins: import('@reduxjs/toolkit').ActionCreatorWithPayload<
    any,
    'document/setDocumentMargins'
  >;
declare const _default: import('@reduxjs/toolkit').Reducer<
  DocumentState,
  import('@reduxjs/toolkit').AnyAction
>;
export default _default;
