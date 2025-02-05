export interface DocumentState {
    documentId: string;
    title: string;
    reloadRecentDoc: boolean;
    margins: number[];
  }
  
  export const initialState: DocumentState = {
    documentId: '',
    title: '',
    reloadRecentDoc: false,
    margins: []
  };