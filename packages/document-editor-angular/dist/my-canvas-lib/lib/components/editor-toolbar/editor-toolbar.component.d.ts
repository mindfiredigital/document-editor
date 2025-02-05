import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EditorToolbarComponent implements OnInit {
    contentStyles: any;
    alignment: string;
    listType: string;
    formats: string[];
    constructor();
    ngOnInit(): void;
    addFormat(format: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditorToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditorToolbarComponent, "lib-editor-toolbar", never, {}, {}, never, never, true, never>;
}
