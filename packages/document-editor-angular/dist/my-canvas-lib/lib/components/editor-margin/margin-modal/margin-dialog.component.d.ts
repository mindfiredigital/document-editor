import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class MarginDialogComponent {
    dialogRef: MatDialogRef<MarginDialogComponent>;
    data: any;
    private fb;
    marginForm: FormGroup;
    constructor(dialogRef: MatDialogRef<MarginDialogComponent>, data: any, fb: FormBuilder);
    onSave(): void;
    onCancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarginDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MarginDialogComponent, "app-margin-dialog", never, {}, {}, never, never, true, never>;
}
