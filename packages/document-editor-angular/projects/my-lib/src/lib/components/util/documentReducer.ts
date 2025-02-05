import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export interface DocumentState {
  documentId: string;
  title: string;
  reloadRecentDoc: boolean;
  margins: number[];
}