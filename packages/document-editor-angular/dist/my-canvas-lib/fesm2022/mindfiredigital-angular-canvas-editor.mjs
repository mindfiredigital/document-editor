import * as i0 from '@angular/core';
import { Component, Inject, Injectable, Input, EventEmitter, ViewChild, Output, NgModule } from '@angular/core';
import * as i1$1 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i4 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i5 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i5$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs';
import { DOMEventHandlers, EditorMode, PageMode, RowFlex, ListStyle } from '@mindfiredigital/canvas-editor';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import * as i1$2 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { faUndo, faRedo, faBold, faItalic, faUnderline, faImage } from '@fortawesome/free-solid-svg-icons';
import * as i2$1 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

class MarginDialogComponent {
    dialogRef;
    data;
    fb;
    marginForm;
    constructor(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.marginForm = this.fb.group({
            top: [data.margins.top],
            bottom: [data.margins.bottom],
            left: [data.margins.left],
            right: [data.margins.right]
        });
    }
    onSave() {
        this.dialogRef.close(this.marginForm.value);
    }
    onCancel() {
        this.dialogRef.close();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: MarginDialogComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i2.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.0", type: MarginDialogComponent, isStandalone: true, selector: "app-margin-dialog", ngImport: i0, template: "<h1 mat-dialog-title>Margins</h1>\n<div mat-dialog-content>\n  <form [formGroup]=\"marginForm\">\n    <mat-form-field>\n      <mat-label>Top</mat-label>\n      <input matInput type=\"number\" formControlName=\"top\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Bottom</mat-label>\n      <input matInput type=\"number\" formControlName=\"bottom\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Left</mat-label>\n      <input matInput type=\"number\" formControlName=\"left\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Right</mat-label>\n      <input matInput type=\"number\" formControlName=\"right\">\n    </mat-form-field>\n  </form>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onCancel()\">Cancel</button>\n  <button mat-button color=\"primary\" (click)=\"onSave()\">Save</button>\n</div>\n", styles: ["::ng-deep .mat-dialog-container{background-color:#fff;padding:24px;border-radius:4px;box-shadow:0 8px 16px #0000003d,0 8px 32px #00000029}::ng-deep mat-dialog-content{display:flex;flex-direction:column}::ng-deep mat-form-field{width:100%;margin-bottom:16px}::ng-deep mat-dialog-actions{display:flex;justify-content:flex-end;margin-top:16px}::ng-deep mat-dialog-actions button{margin-left:8px}\n"], dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: MarginDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-margin-dialog', standalone: true, imports: [MatDialogModule,
                        MatButtonModule,
                        MatFormFieldModule,
                        MatInputModule,
                        ReactiveFormsModule,], template: "<h1 mat-dialog-title>Margins</h1>\n<div mat-dialog-content>\n  <form [formGroup]=\"marginForm\">\n    <mat-form-field>\n      <mat-label>Top</mat-label>\n      <input matInput type=\"number\" formControlName=\"top\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Bottom</mat-label>\n      <input matInput type=\"number\" formControlName=\"bottom\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Left</mat-label>\n      <input matInput type=\"number\" formControlName=\"left\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Right</mat-label>\n      <input matInput type=\"number\" formControlName=\"right\">\n    </mat-form-field>\n  </form>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onCancel()\">Cancel</button>\n  <button mat-button color=\"primary\" (click)=\"onSave()\">Save</button>\n</div>\n", styles: ["::ng-deep .mat-dialog-container{background-color:#fff;padding:24px;border-radius:4px;box-shadow:0 8px 16px #0000003d,0 8px 32px #00000029}::ng-deep mat-dialog-content{display:flex;flex-direction:column}::ng-deep mat-form-field{width:100%;margin-bottom:16px}::ng-deep mat-dialog-actions{display:flex;justify-content:flex-end;margin-top:16px}::ng-deep mat-dialog-actions button{margin-left:8px}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i2.FormBuilder }] });

class DocumentService {
    marginsSource = new BehaviorSubject([100, 956, 120, 696]);
    margins$ = this.marginsSource.asObservable();
    // Get margins for a specific document
    getPaperMargins() {
        return this.marginsSource.value;
    }
    // Set margins using the external DOMEventHandlers.setPaperMargins function
    setPaperMargins(margins) {
        DOMEventHandlers.setPaperMargins(margins);
        this.marginsSource.next(margins);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: DocumentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: DocumentService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: DocumentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class EditorMarginComponent {
    fb;
    dialog;
    documentService;
    marginsForm;
    documentId = '123'; // Simulated document ID, you can get this dynamically
    constructor(fb, dialog, documentService) {
        this.fb = fb;
        this.dialog = dialog;
        this.documentService = documentService;
        this.marginsForm = this.fb.group({
            top: [0],
            bottom: [0],
            left: [0],
            right: [0]
        });
    }
    ngOnInit() {
        // Fetch the margins state on load
        this.documentService.margins$.subscribe(margins => {
            this.marginsForm.patchValue(margins);
        });
        // Debounce form changes before saving
        this.marginsForm.valueChanges
            .pipe(debounceTime(500))
            .subscribe(margins => {
            this.documentService.setPaperMargins(margins);
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(MarginDialogComponent, {
            width: '300px',
            data: { margins: this.marginsForm.value }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.marginsForm.setValue(result);
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: EditorMarginComponent, deps: [{ token: i2.FormBuilder }, { token: i1.MatDialog }, { token: DocumentService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.0", type: EditorMarginComponent, isStandalone: true, selector: "app-editor-margin", ngImport: i0, template: "<button mat-button (click)=\"openDialog()\">\n    <mat-icon>document_scanner</mat-icon>\n  </button>\n  ", styles: [""], dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "ngmodule", type: MatInputModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i5$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: EditorMarginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-editor-margin', standalone: true, imports: [MatDialogModule,
                        MatButtonModule,
                        MatFormFieldModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatIconModule], template: "<button mat-button (click)=\"openDialog()\">\n    <mat-icon>document_scanner</mat-icon>\n  </button>\n  " }]
        }], ctorParameters: () => [{ type: i2.FormBuilder }, { type: i1.MatDialog }, { type: DocumentService }] });

class EditorFooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: EditorFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.0", type: EditorFooterComponent, isStandalone: true, selector: "lib-editor-footer", ngImport: i0, template: "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span class=\"spacer\"></span>\n      <app-editor-margin></app-editor-margin> \n    </mat-toolbar-row>\n  </mat-toolbar>\n  ", styles: [".spacer{flex:1 1 auto}\n"], dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1$1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i1$1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "component", type: EditorMarginComponent, selector: "app-editor-margin" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: EditorFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-editor-footer', standalone: true, imports: [MatToolbarModule, EditorMarginComponent], template: "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span class=\"spacer\"></span>\n      <app-editor-margin></app-editor-margin> \n    </mat-toolbar-row>\n  </mat-toolbar>\n  ", styles: [".spacer{flex:1 1 auto}\n"] }]
        }] });

class CustomSliderVerticalComponent {
    value = new FormControl(0);
    verticalMarks = new Array(12)
        .fill(0)
        .map((ob, i) => ({ value: -i * 96, label: i }));
    constructor() { }
    onInputChange(event) {
        this.value.setValue(event.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: CustomSliderVerticalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.0", type: CustomSliderVerticalComponent, isStandalone: true, selector: "lib-custom-slider-vertical", ngImport: i0, template: "<!-- <mat-slider [min]=\"-1152\" [max]=\"0\" [step]=\"96\" [vertical]=\"true\" [invert]=\"true\"\n            [thumbLabel]=\"true\" [value]=\"value.value\" [tickInterval]=\"96\"\n            (input)=\"onInputChange($event)\">\n</mat-slider> -->\n", styles: [""], dependencies: [{ kind: "ngmodule", type: MatSliderModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: CustomSliderVerticalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-custom-slider-vertical', standalone: true, imports: [MatSliderModule], template: "<!-- <mat-slider [min]=\"-1152\" [max]=\"0\" [step]=\"96\" [vertical]=\"true\" [invert]=\"true\"\n            [thumbLabel]=\"true\" [value]=\"value.value\" [tickInterval]=\"96\"\n            (input)=\"onInputChange($event)\">\n</mat-slider> -->\n" }]
        }], ctorParameters: () => [] });

class CustomSliderHorizontalComponent {
    value = new FormControl(0);
    horizontalMarks = new Array(9)
        .fill(0)
        .map((ob, i) => ({ value: i * 96, label: i }));
    constructor() { }
    onInputChange(event) {
        this.value.setValue(event.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: CustomSliderHorizontalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.0", type: CustomSliderHorizontalComponent, isStandalone: true, selector: "lib-custom-slider-horizontal", ngImport: i0, template: "<!-- <div class='ruler'>\n  <div class='cm' *ngFor=\"let i of [].constructor(11); let index = index\">\n    <div class='mm' *ngFor=\"let j of [].constructor(9)\"></div>\n  </div>\n</div> -->\n", styles: [".activeCell{border:1px solid rgba(73,145,242,.2)!important;background:#4991f226!important}.tableCollapse{width:17.25rem;height:19.375;background:#fff;box-shadow:0 .125rem .75rem #38383833;border:.063rem solid #e2e6ed;box-sizing:border-box;border-radius:.125rem;position:absolute;z-index:99;padding:.875rem 1.688rem;cursor:auto}.tableTitle{display:flex;justify-content:space-between;align-items:center;padding-bottom:5px;border-bottom:1px solid #e2e6ed;color:#000}.tableContainer{position:relative}\n"], dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: CustomSliderHorizontalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-custom-slider-horizontal', standalone: true, imports: [MatSliderModule, CommonModule], template: "<!-- <div class='ruler'>\n  <div class='cm' *ngFor=\"let i of [].constructor(11); let index = index\">\n    <div class='mm' *ngFor=\"let j of [].constructor(9)\"></div>\n  </div>\n</div> -->\n", styles: [".activeCell{border:1px solid rgba(73,145,242,.2)!important;background:#4991f226!important}.tableCollapse{width:17.25rem;height:19.375;background:#fff;box-shadow:0 .125rem .75rem #38383833;border:.063rem solid #e2e6ed;box-sizing:border-box;border-radius:.125rem;position:absolute;z-index:99;padding:.875rem 1.688rem;cursor:auto}.tableTitle{display:flex;justify-content:space-between;align-items:center;padding-bottom:5px;border-bottom:1px solid #e2e6ed;color:#000}.tableContainer{position:relative}\n"] }]
        }], ctorParameters: () => [] });

class DocumentReducerService {
    initialState = {
        documentId: '',
        title: '',
        reloadRecentDoc: false,
        margins: [],
    };
    documentSubject = new BehaviorSubject(this.initialState);
    constructor() { }
    getDocumentState() {
        return this.documentSubject
            .asObservable()
            .pipe();
    }
    setDocumentTitle(title) {
        this.documentSubject.next({ ...this.documentSubject.value, title });
    }
    reloadRecentDoc(reload) {
        this.documentSubject.next({
            ...this.documentSubject.value,
            reloadRecentDoc: reload,
        });
    }
    setDocumentMargins(margins) {
        this.documentSubject.next({ ...this.documentSubject.value, margins });
    }
    setDocumentId(documentId) {
        this.documentSubject.next({ ...this.documentSubject.value, documentId });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: DocumentReducerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: DocumentReducerService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: DocumentReducerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const store = () => {
    let result = localStorage.getItem('document');
    if (result == null) {
        let doc = new DocumentReducerService();
        localStorage.setItem('document', JSON.stringify(doc));
        return doc;
    }
    return JSON.parse(result);
};

function useDebounce(value, delay) {
    let timerId;
    timerId = setTimeout(() => {
        return value;
    }, delay);
    clearTimeout(timerId);
}

class MarginRulerComponent {
    documentService;
    documentId;
    verticalSlider = [];
    horizontalSlider = [];
    margins = [];
    constructor(documentService) {
        this.documentService = documentService;
    }
    ngOnInit() {
        if (!this.documentId) {
            console.error('Document ID is not provided.');
            return;
        }
        const documentState = store();
        if (!documentState || !documentState.margins) {
            console.error('Margins are not available in the document state.');
            return;
        }
        this.margins = useDebounce(documentState.margins, 500);
        if (this.margins.length) {
            this.verticalSlider = [-956, -100];
            this.horizontalSlider = [120, 696];
            if (!this.verticalSlider.length && !this.horizontalSlider.length) {
                DOMEventHandlers.setPaperMargins(this.margins);
            }
        }
        // this.documentService = new DocumentService();
    }
    handleChange(event, value) {
        const [bottom, top] = value;
        this.verticalSlider = value;
        const margin = [...this.margins];
        margin[0] = Math.abs(top);
        margin[1] = 1056 - Math.abs(bottom);
        DOMEventHandlers.setPaperMargins(margin);
        this.documentService.setDocumentMargins({ margins: margin });
    }
    handleChangeHorizontal(event, value) {
        const [left, right] = value;
        this.horizontalSlider = value;
        const margin = [...this.margins];
        margin[2] = left;
        margin[3] = 816 - right;
        DOMEventHandlers.setPaperMargins(margin);
        this.documentService.setDocumentMargins({ margins: margin });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: MarginRulerComponent, deps: [{ token: DocumentReducerService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.0", type: MarginRulerComponent, isStandalone: true, selector: "lib-margin-ruler", inputs: { documentId: "documentId" }, ngImport: i0, template: "<div style=\"position: relative;\">\n  <!-- <lib-custom-slider-vertical [value]=\"verticalSlider.length ? verticalSlider : [-956, -100]\" [min]=\"-1056\" [max]=\"0\"\n    [marks]=\"verticalMarks\" (change)=\"handleChange($event)\" [step]=\"24\" [size]=\"'small'\"\n    [slots]=\"{ thumb: MarginRightArrow }\" valueLabelDisplay=\"off\"></lib-custom-slider-vertical>\n  <lib-custom-slider-horizontal [value]=\"horizontalSlider.length ? horizontalSlider : [120, 696]\" [min]=\"0\" [max]=\"816\"\n    [marks]=\"horizontalMarks\" (change)=\"handleChangeHorizontal($event)\" [step]=\"24\" [size]=\"'small'\"\n    [slots]=\"{ thumb: MarginDownArrow }\" valueLabelDisplay=\"off\"></lib-custom-slider-horizontal> -->\n</div>", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: MarginRulerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-margin-ruler', standalone: true, imports: [CustomSliderVerticalComponent, CustomSliderHorizontalComponent], template: "<div style=\"position: relative;\">\n  <!-- <lib-custom-slider-vertical [value]=\"verticalSlider.length ? verticalSlider : [-956, -100]\" [min]=\"-1056\" [max]=\"0\"\n    [marks]=\"verticalMarks\" (change)=\"handleChange($event)\" [step]=\"24\" [size]=\"'small'\"\n    [slots]=\"{ thumb: MarginRightArrow }\" valueLabelDisplay=\"off\"></lib-custom-slider-vertical>\n  <lib-custom-slider-horizontal [value]=\"horizontalSlider.length ? horizontalSlider : [120, 696]\" [min]=\"0\" [max]=\"816\"\n    [marks]=\"horizontalMarks\" (change)=\"handleChangeHorizontal($event)\" [step]=\"24\" [size]=\"'small'\"\n    [slots]=\"{ thumb: MarginDownArrow }\" valueLabelDisplay=\"off\"></lib-custom-slider-horizontal> -->\n</div>" }]
        }], ctorParameters: () => [{ type: DocumentReducerService }], propDecorators: { documentId: [{
                type: Input
            }] } });

class CanvasEditorComponent {
    props = {};
    documentId = '0';
    canvasEditorRef;
    dropdown = {
        left: 1180,
        top: 250,
        visiblity: false,
    };
    editorContent = [];
    selectedText = '';
    instance;
    constructor() { }
    ngOnInit() {
        const container = document.querySelector('.canvas-editor');
        if (container.querySelector('[editor-component="main"]')) {
            return;
        }
        const editorOptions = {
            height: 1056,
            width: 816,
            mode: EditorMode.EDIT,
            pageMode: PageMode.PAGING,
            pageNumber: {
                format: '{pageNo}/{pageCount}',
            },
            minSize: 1,
            maxSize: 72,
        };
        // container.addEventListener('mouseup', (e) => {
        //   _props.onSelect && _props?.onSelect(DOMEventHandlers.getSelectedText());
        // })
        // container.addEventListener('keydown', (e) => {
        //   const text = DOMEventHandlers.getContent()?.data?.main;
        //   setEditorContent(text);
        //   _props?.onChange && _props?.onChange(text[0].value);
        // })
        DOMEventHandlers?.register(container, this.editorContent, {});
        DOMEventHandlers?.setContent({ main: [{ value: 'hello' }] });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: CanvasEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.0", type: CanvasEditorComponent, isStandalone: true, selector: "lib-canvas-editor", ngImport: i0, template: "<div class=\"canvas-editor-main\">\n  <div class=\"canvas-editor editor\" id=\"canvasEditorRef\">\n    <!-- <lib-margin-ruler [documentId]=\"documentId\"></lib-margin-ruler> -->\n  </div>\n</div>", styles: [".editor>div{margin:0}.canvas-editor{position:relative}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: CanvasEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-canvas-editor', standalone: true, imports: [MarginRulerComponent], template: "<div class=\"canvas-editor-main\">\n  <div class=\"canvas-editor editor\" id=\"canvasEditorRef\">\n    <!-- <lib-margin-ruler [documentId]=\"documentId\"></lib-margin-ruler> -->\n  </div>\n</div>", styles: [".editor>div{margin:0}.canvas-editor{position:relative}\n"] }]
        }], ctorParameters: () => [] });

// image-upload-button.component.ts
class ImageUploadButtonComponent {
    fileInput;
    imageSelected = new EventEmitter();
    handleFileInputChange(event) {
        const input = event.target;
        if (input.files && input.files.length > 0) {
            const selectedFile = input.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Data = reader.result;
                const img = new Image();
                img.onload = () => {
                    this.imageSelected.emit({
                        base64: base64Data,
                        width: img.width,
                        height: img.height
                    });
                };
                img.src = base64Data;
            };
            reader.readAsDataURL(selectedFile);
        }
    }
    handleButtonClick() {
        this.fileInput.nativeElement.click();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: ImageUploadButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.0", type: ImageUploadButtonComponent, isStandalone: true, selector: "app-image-upload-button", outputs: { imageSelected: "imageSelected" }, viewQueries: [{ propertyName: "fileInput", first: true, predicate: ["fileInput"], descendants: true }], ngImport: i0, template: "<input type=\"file\" #fileInput (change)=\"handleFileInputChange($event)\" accept=\"image/*\" style=\"display: none;\" />\n<button mat-icon-button (click)=\"handleButtonClick()\">\n  <span class=\"material-icons md-18\">\n    image\n    </span>\n</button>" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: ImageUploadButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-image-upload-button', standalone: true, template: "<input type=\"file\" #fileInput (change)=\"handleFileInputChange($event)\" accept=\"image/*\" style=\"display: none;\" />\n<button mat-icon-button (click)=\"handleButtonClick()\">\n  <span class=\"material-icons md-18\">\n    image\n    </span>\n</button>" }]
        }], propDecorators: { fileInput: [{
                type: ViewChild,
                args: ['fileInput', { static: false }]
            }], imageSelected: [{
                type: Output
            }] } });

class EmphasisComponent {
    toolbar;
    toolbarClass;
    faUndo = faUndo;
    faRedo = faRedo;
    faBold = faBold;
    faItalic = faItalic;
    faUnderline = faUnderline;
    faImage = faImage;
    contentStyles;
    alignment = RowFlex.LEFT;
    listType = '';
    formats = [];
    interval;
    ngOnInit() {
        this.interval = setInterval(() => {
            const data = DOMEventHandlers.getContentStyles();
            this.contentStyles = data;
        }, 100);
    }
    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    toggleFormat(format) {
        if (this.formats.indexOf(format) === -1) {
            this.formats.push(format);
        }
        else {
            this.formats = this.formats.filter(f => f !== format);
        }
        // Call appropriate formatting function
        switch (format) {
            case 'Bold':
                DOMEventHandlers.handleBold();
                break;
            case 'Italic':
                DOMEventHandlers.handleItalic();
                break;
            case 'Underline':
                DOMEventHandlers.handleUnderline();
                break;
            case 'Strikethrough':
                DOMEventHandlers.handleStrikeout();
                break;
        }
    }
    handleUndo() {
        DOMEventHandlers.handleUndo();
    }
    handleRedo() {
        DOMEventHandlers.handleRedo();
    }
    handleAlignment(alignment) {
        DOMEventHandlers.handleAlign(alignment);
        this.alignment = alignment;
    }
    handleList(type) {
        DOMEventHandlers.handleList(type, ListStyle.DECIMAL);
        this.listType = this.listType === type ? '' : type;
    }
    setTextColor(event) {
        const color = event.target.value;
        DOMEventHandlers.setFontColor(color);
    }
    // setBackgroundColor(event: Event): void {
    //   const color = (event.target as HTMLInputElement).value;
    //   DOMEventHandlers.set(color);
    // }
    // clearFormatting(): void {
    //   this.formats = [];
    //   DOMEventHandlers.clear();
    // }
    onImageSelected(event) {
        DOMEventHandlers.setImage({
            value: event.base64,
            height: event.height,
            width: event.width,
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: EmphasisComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.0", type: EmphasisComponent, isStandalone: true, selector: "lib-emphasis", inputs: { toolbar: "toolbar", toolbarClass: "toolbarClass" }, ngImport: i0, template: "<!-- First section: Undo, Redo -->\n<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\" multiple appearance=\"standard\">\n  <!-- Undo Button -->\n  <mat-button-toggle value=\"undo\" (click)=\"handleUndo()\">\n    <fa-icon [icon]=\"faUndo\"></fa-icon>\n  </mat-button-toggle>\n\n  <!-- Redo Button -->\n  <mat-button-toggle value=\"redo\" (click)=\"handleRedo()\">\n    <fa-icon [icon]=\"faRedo\"></fa-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n\n<!-- Second section: Bold, Italic, Underline -->\n<mat-button-toggle-group name=\"textStyle\" aria-label=\"Text Style\" multiple appearance=\"standard\">\n  <!-- Bold Button -->\n  <mat-button-toggle value=\"bold\" (click)=\"toggleFormat('Bold')\">\n    <fa-icon [icon]=\"faBold\"></fa-icon>\n  </mat-button-toggle>\n\n  <!-- Italic Button -->\n  <mat-button-toggle value=\"italic\" (click)=\"toggleFormat('Italic')\">\n    <fa-icon [icon]=\"faItalic\"></fa-icon>\n  </mat-button-toggle>\n\n  <!-- Underline Button -->\n  <mat-button-toggle value=\"underline\" (click)=\"toggleFormat('Underline')\">\n    <fa-icon [icon]=\"faUnderline\"></fa-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n\n<!-- Third section: Image upload button -->\n<mat-button-toggle-group name=\"imageUpload\" aria-label=\"Image Upload\" appearance=\"standard\">\n  <mat-button-toggle class=\"upload-image-button\">\n    <fa-icon [icon]=\"faImage\"></fa-icon>\n    <app-image-upload-button (imageSelected)=\"onImageSelected($event)\"></app-image-upload-button>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n", styles: [".upload-image-button{cursor:pointer!important}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled", "disabledInteractive", "hideSingleSelectionIndicator", "hideMultipleSelectionIndicator"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled", "disabledInteractive"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "component", type: ImageUploadButtonComponent, selector: "app-image-upload-button", outputs: ["imageSelected"] }, { kind: "ngmodule", type: FontAwesomeModule }, { kind: "component", type: i2$1.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "animation", "mask", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: EmphasisComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-emphasis', standalone: true, imports: [
                        MatButtonToggleModule,
                        ImageUploadButtonComponent,
                        FontAwesomeModule,
                    ], template: "<!-- First section: Undo, Redo -->\n<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\" multiple appearance=\"standard\">\n  <!-- Undo Button -->\n  <mat-button-toggle value=\"undo\" (click)=\"handleUndo()\">\n    <fa-icon [icon]=\"faUndo\"></fa-icon>\n  </mat-button-toggle>\n\n  <!-- Redo Button -->\n  <mat-button-toggle value=\"redo\" (click)=\"handleRedo()\">\n    <fa-icon [icon]=\"faRedo\"></fa-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n\n<!-- Second section: Bold, Italic, Underline -->\n<mat-button-toggle-group name=\"textStyle\" aria-label=\"Text Style\" multiple appearance=\"standard\">\n  <!-- Bold Button -->\n  <mat-button-toggle value=\"bold\" (click)=\"toggleFormat('Bold')\">\n    <fa-icon [icon]=\"faBold\"></fa-icon>\n  </mat-button-toggle>\n\n  <!-- Italic Button -->\n  <mat-button-toggle value=\"italic\" (click)=\"toggleFormat('Italic')\">\n    <fa-icon [icon]=\"faItalic\"></fa-icon>\n  </mat-button-toggle>\n\n  <!-- Underline Button -->\n  <mat-button-toggle value=\"underline\" (click)=\"toggleFormat('Underline')\">\n    <fa-icon [icon]=\"faUnderline\"></fa-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n\n<!-- Third section: Image upload button -->\n<mat-button-toggle-group name=\"imageUpload\" aria-label=\"Image Upload\" appearance=\"standard\">\n  <mat-button-toggle class=\"upload-image-button\">\n    <fa-icon [icon]=\"faImage\"></fa-icon>\n    <app-image-upload-button (imageSelected)=\"onImageSelected($event)\"></app-image-upload-button>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n", styles: [".upload-image-button{cursor:pointer!important}\n"] }]
        }], propDecorators: { toolbar: [{
                type: Input
            }], toolbarClass: [{
                type: Input
            }] } });

class EditorToolbarComponent {
    contentStyles;
    alignment = RowFlex.LEFT;
    listType = '';
    formats = [];
    constructor() { }
    ngOnInit() {
        // let interval: any;
        // const timeout = setTimeout(() => {
        //   interval = setInterval(() => {
        //     const data = DOMEventHandlers.getContentStyles();
        //     this.contentStyles = data;
        //   }, 100);
        // }, 1000);
    }
    addFormat(format) {
        let selectedFormats;
        if (this.formats.indexOf(format) === -1) {
            selectedFormats = [...this.formats, format];
        }
        else {
            selectedFormats = this.formats.filter((item) => item !== format);
        }
        this.formats = selectedFormats;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: EditorToolbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.0", type: EditorToolbarComponent, isStandalone: true, selector: "lib-editor-toolbar", ngImport: i0, template: "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <lib-emphasis></lib-emphasis>\n  </mat-toolbar-row>\n</mat-toolbar>", styles: ["mat-toolbar-row{display:flex;justify-content:center}\n"], dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1$1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i1$1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: EmphasisComponent, selector: "lib-emphasis", inputs: ["toolbar", "toolbarClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: EditorToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-editor-toolbar', standalone: true, imports: [
                        MatToolbarModule,
                        MatButtonModule,
                        MatIconModule,
                        EmphasisComponent,
                    ], template: "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <lib-emphasis></lib-emphasis>\n  </mat-toolbar-row>\n</mat-toolbar>", styles: ["mat-toolbar-row{display:flex;justify-content:center}\n"] }]
        }], ctorParameters: () => [] });

class MyLibComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: MyLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.0", type: MyLibComponent, isStandalone: true, selector: "lib-my-lib", ngImport: i0, template: `
    <lib-editor-toolbar></lib-editor-toolbar>
    <lib-canvas-editor></lib-canvas-editor>
    <lib-editor-footer></lib-editor-footer>
  `, isInline: true, styles: [""], dependencies: [{ kind: "component", type: EditorToolbarComponent, selector: "lib-editor-toolbar" }, { kind: "component", type: CanvasEditorComponent, selector: "lib-canvas-editor" }, { kind: "component", type: EditorFooterComponent, selector: "lib-editor-footer" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: MyLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-lib', template: `
    <lib-editor-toolbar></lib-editor-toolbar>
    <lib-canvas-editor></lib-canvas-editor>
    <lib-editor-footer></lib-editor-footer>
  `, standalone: true, imports: [EditorToolbarComponent, CanvasEditorComponent, EditorFooterComponent] }]
        }] });

// projects/my-lib/src/lib/my-lib.module.ts
class MyCanvasLibModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: MyCanvasLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.0", ngImport: i0, type: MyCanvasLibModule, imports: [CommonModule, MyLibComponent], exports: [MyLibComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: MyCanvasLibModule, providers: [
            DocumentService
            // ... other services
        ], imports: [CommonModule, MyLibComponent] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.0", ngImport: i0, type: MyCanvasLibModule, decorators: [{
            type: NgModule,
            args: [{
                    // declarations: [MyLibComponent],
                    imports: [CommonModule, MyLibComponent],
                    exports: [
                        MyLibComponent, // Export standalone component
                    ],
                    providers: [
                        DocumentService
                        // ... other services
                    ]
                }]
        }] });

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CanvasEditorComponent, DocumentService, EditorFooterComponent, EditorToolbarComponent, MyCanvasLibModule, MyLibComponent };
//# sourceMappingURL=mindfiredigital-angular-canvas-editor.mjs.map
