import { OnInit } from '@angular/core';
import { DocumentReducerService } from '../util/document-reducer.service';
import * as i0 from "@angular/core";
export declare class MarginRulerComponent implements OnInit {
    private documentService;
    documentId: string;
    verticalSlider: number[];
    horizontalSlider: number[];
    margins: any;
    constructor(documentService: DocumentReducerService);
    ngOnInit(): void;
    handleChange(event: Event, value: number[]): void;
    handleChangeHorizontal(event: Event, value: number[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarginRulerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MarginRulerComponent, "lib-margin-ruler", never, { "documentId": { "alias": "documentId"; "required": false; }; }, {}, never, never, true, never>;
}
