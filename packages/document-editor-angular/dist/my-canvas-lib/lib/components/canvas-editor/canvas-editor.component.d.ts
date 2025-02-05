import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CanvasEditorComponent implements OnInit {
    props: any;
    documentId: string;
    canvasEditorRef: any;
    dropdown: {
        left: number;
        top: number;
        visiblity: boolean;
    };
    editorContent: any;
    selectedText: string;
    instance: any;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CanvasEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CanvasEditorComponent, "lib-canvas-editor", never, {}, {}, never, never, true, never>;
}
