import * as i0 from "@angular/core";
export declare class DocumentService {
    private marginsSource;
    margins$: import("rxjs").Observable<number[]>;
    getPaperMargins(): number[];
    setPaperMargins(margins: number[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocumentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DocumentService>;
}
