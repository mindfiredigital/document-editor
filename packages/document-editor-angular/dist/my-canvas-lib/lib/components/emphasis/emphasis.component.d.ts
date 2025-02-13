import { RowFlex, ListType } from '@mindfiredigital/canvas-editor';
import { IRangeStyle } from '@mindfiredigital/canvas-editor/dist/src/editor/interface/Listener';
import * as i0 from "@angular/core";
export declare class EmphasisComponent {
    toolbar: any;
    toolbarClass: any;
    faUndo: import("@fortawesome/free-solid-svg-icons").IconDefinition;
    faRedo: import("@fortawesome/free-solid-svg-icons").IconDefinition;
    faBold: import("@fortawesome/free-solid-svg-icons").IconDefinition;
    faItalic: import("@fortawesome/free-solid-svg-icons").IconDefinition;
    faUnderline: import("@fortawesome/free-solid-svg-icons").IconDefinition;
    faImage: import("@fortawesome/free-solid-svg-icons").IconDefinition;
    contentStyles: IRangeStyle | undefined;
    alignment: string;
    listType: string;
    formats: string[];
    private interval;
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleFormat(format: string): void;
    handleUndo(): void;
    handleRedo(): void;
    handleAlignment(alignment: RowFlex): void;
    handleList(type: ListType): void;
    setTextColor(event: Event): void;
    onImageSelected(event: {
        base64: string;
        width: number;
        height: number;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmphasisComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmphasisComponent, "lib-emphasis", never, { "toolbar": { "alias": "toolbar"; "required": false; }; "toolbarClass": { "alias": "toolbarClass"; "required": false; }; }, {}, never, never, true, never>;
}
