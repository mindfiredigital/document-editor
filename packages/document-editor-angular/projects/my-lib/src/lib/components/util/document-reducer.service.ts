import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DocumentState } from './documentReducer';

@Injectable({
  providedIn: 'root',
})
export class DocumentReducerService {
  initialState: DocumentState = {
    documentId: '',
    title: '',
    reloadRecentDoc: false,
    margins: [],
  };

  private documentSubject = new BehaviorSubject<DocumentState>(
    this.initialState
  );

  constructor() {}

  getDocumentState() {
    return this.documentSubject
      .asObservable()
      .pipe
      // distinctUntilChanged() // Ensure only distinct state changes are emitted
      ();
  }

  setDocumentTitle(title: string) {
    this.documentSubject.next({ ...this.documentSubject.value, title });
  }

  reloadRecentDoc(reload: boolean) {
    this.documentSubject.next({
      ...this.documentSubject.value,
      reloadRecentDoc: reload,
    });
  }

  setDocumentMargins(margins: any) {
    this.documentSubject.next({ ...this.documentSubject.value, margins });
  }

  setDocumentId(documentId: string) {
    this.documentSubject.next({ ...this.documentSubject.value, documentId });
  }
}
