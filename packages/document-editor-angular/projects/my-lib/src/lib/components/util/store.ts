import { DocumentReducerService } from './document-reducer.service';
import { DocumentState } from './documentReducer';
export const store = () => {
  let result = localStorage.getItem('document');
  if (result == null) {
    let doc = new DocumentReducerService();
    localStorage.setItem('document', JSON.stringify(doc));
    return doc;
  }

  return JSON.parse(result) as DocumentState;
};
