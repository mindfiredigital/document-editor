import { DocumentState } from './documentReducer';
import * as i0 from "@angular/core";
export declare class DocumentReducerService {
    initialState: DocumentState;
    private documentSubject;
    constructor();
    getDocumentState(): import("rxjs").Observable<DocumentState>;
    setDocumentTitle(title: string): void;
    reloadRecentDoc(reload: boolean): void;
    setDocumentMargins(margins: any): void;
    setDocumentId(documentId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocumentReducerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DocumentReducerService>;
}
