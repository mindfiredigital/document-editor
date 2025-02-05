import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DocumentService } from '../../services/document.service';
import * as i0 from "@angular/core";
export declare class EditorMarginComponent implements OnInit {
    private fb;
    dialog: MatDialog;
    private documentService;
    marginsForm: FormGroup;
    documentId: string;
    constructor(fb: FormBuilder, dialog: MatDialog, documentService: DocumentService);
    ngOnInit(): void;
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditorMarginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditorMarginComponent, "app-editor-margin", never, {}, {}, never, never, true, never>;
}
