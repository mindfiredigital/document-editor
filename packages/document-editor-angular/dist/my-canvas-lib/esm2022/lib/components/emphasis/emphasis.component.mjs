import { Component, Input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ImageUploadButtonComponent } from '../image-upload-button/image-upload-button.component';
import { DOMEventHandlers, RowFlex, ListStyle } from '@mindfiredigital/canvas-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
export class EmphasisComponent {
    constructor() {
        this.alignment = RowFlex.LEFT;
        this.listType = '';
        this.formats = [];
    }
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
            this.formats = this.formats.filter((f) => f !== format);
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EmphasisComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: EmphasisComponent, isStandalone: true, selector: "lib-emphasis", inputs: { toolbar: "toolbar", toolbarClass: "toolbarClass" }, ngImport: i0, template: "<!-- First section: Undo, Redo -->\r\n<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\" multiple>\r\n  <!-- Undo Button -->\r\n  <mat-button-toggle value=\"undo\" (click)=\"handleUndo()\">\r\n    <span class=\"material-icons md-18\">undo</span>\r\n  </mat-button-toggle>\r\n\r\n  <!-- Redo Button -->\r\n  <mat-button-toggle value=\"redo\" (click)=\"handleRedo()\">\r\n    <span class=\"material-icons md-18\">redo</span>\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n\r\n\r\n<!-- Second section: Bold, Italic, Underline -->\r\n<mat-button-toggle-group name=\"textStyle\" aria-label=\"Text Style\" multiple>\r\n  <!-- Bold Button -->\r\n  <mat-button-toggle value=\"bold\" (click)=\"toggleFormat('Bold')\">\r\n    <span class=\"material-icons md-18\">format_bold</span>\r\n  </mat-button-toggle>\r\n\r\n  <!-- Italic Button -->\r\n  <mat-button-toggle value=\"italic\" (click)=\"toggleFormat('Italic')\">\r\n    <span class=\"material-icons md-18\">format_italic</span>\r\n  </mat-button-toggle>\r\n\r\n  <!-- Underline Button -->\r\n  <mat-button-toggle value=\"underline\" (click)=\"toggleFormat('Underline')\">\r\n    <span class=\"material-icons md-18\">format_underlined</span>\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n\r\n\r\n<!-- Third section: Image upload button -->\r\n<mat-button-toggle-group name=\"imageUpload\" aria-label=\"Image Upload\">\r\n  <mat-button-toggle class=\"upload-image-button\">\r\n    <app-image-upload-button (imageSelected)=\"onImageSelected($event)\"></app-image-upload-button>\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n", styles: [".upload-image-button{cursor:pointer!important}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled", "hideSingleSelectionIndicator", "hideMultipleSelectionIndicator"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "component", type: ImageUploadButtonComponent, selector: "app-image-upload-button", outputs: ["imageSelected"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EmphasisComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-emphasis', standalone: true, imports: [MatButtonToggleModule, ImageUploadButtonComponent], template: "<!-- First section: Undo, Redo -->\r\n<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\" multiple>\r\n  <!-- Undo Button -->\r\n  <mat-button-toggle value=\"undo\" (click)=\"handleUndo()\">\r\n    <span class=\"material-icons md-18\">undo</span>\r\n  </mat-button-toggle>\r\n\r\n  <!-- Redo Button -->\r\n  <mat-button-toggle value=\"redo\" (click)=\"handleRedo()\">\r\n    <span class=\"material-icons md-18\">redo</span>\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n\r\n\r\n<!-- Second section: Bold, Italic, Underline -->\r\n<mat-button-toggle-group name=\"textStyle\" aria-label=\"Text Style\" multiple>\r\n  <!-- Bold Button -->\r\n  <mat-button-toggle value=\"bold\" (click)=\"toggleFormat('Bold')\">\r\n    <span class=\"material-icons md-18\">format_bold</span>\r\n  </mat-button-toggle>\r\n\r\n  <!-- Italic Button -->\r\n  <mat-button-toggle value=\"italic\" (click)=\"toggleFormat('Italic')\">\r\n    <span class=\"material-icons md-18\">format_italic</span>\r\n  </mat-button-toggle>\r\n\r\n  <!-- Underline Button -->\r\n  <mat-button-toggle value=\"underline\" (click)=\"toggleFormat('Underline')\">\r\n    <span class=\"material-icons md-18\">format_underlined</span>\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n\r\n\r\n<!-- Third section: Image upload button -->\r\n<mat-button-toggle-group name=\"imageUpload\" aria-label=\"Image Upload\">\r\n  <mat-button-toggle class=\"upload-image-button\">\r\n    <app-image-upload-button (imageSelected)=\"onImageSelected($event)\"></app-image-upload-button>\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n", styles: [".upload-image-button{cursor:pointer!important}\n"] }]
        }], propDecorators: { toolbar: [{
                type: Input
            }], toolbarClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1waGFzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2FudmFzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZW1waGFzaXMvZW1waGFzaXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2FudmFzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZW1waGFzaXMvZW1waGFzaXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFeEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbEcsT0FBTyxFQUFrQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQVksU0FBUyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQVNoSSxNQUFNLE9BQU8saUJBQWlCO0lBUDlCO1FBWUUsY0FBUyxHQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDakMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQWEsRUFBRSxDQUFDO0tBK0V4QjtJQTVFQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQWM7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFFRCx1Q0FBdUM7UUFDdkMsUUFBUSxNQUFNLEVBQUUsQ0FBQztZQUNmLEtBQUssTUFBTTtnQkFDVCxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDOUIsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssV0FBVztnQkFDZCxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDbkMsTUFBTTtZQUNSLEtBQUssZUFBZTtnQkFDbEIsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ25DLE1BQU07UUFDVixDQUFDO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsVUFBVTtRQUNSLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlLENBQUMsU0FBa0I7UUFDaEMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYztRQUN2QixnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVk7UUFDdkIsTUFBTSxLQUFLLEdBQUksS0FBSyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDO1FBQ3ZELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLDREQUE0RDtJQUM1RCxpQ0FBaUM7SUFDakMsSUFBSTtJQUVKLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLElBQUk7SUFDSixlQUFlLENBQUMsS0FBd0Q7UUFDdEUsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1lBQ3hCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNuQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7a0lBckZVLGlCQUFpQjtzSEFBakIsaUJBQWlCLHNJQ2I5Qix3bERBdUNBLHlHRDlCWSxxQkFBcUIseWxCQUFDLDBCQUEwQjs7NEZBSS9DLGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDRSxjQUFjLGNBQ1osSUFBSSxXQUNQLENBQUMscUJBQXFCLEVBQUMsMEJBQTBCLENBQUM7OEJBS2xELE9BQU87c0JBQWYsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Ub2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBJbWFnZVVwbG9hZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2ltYWdlLXVwbG9hZC1idXR0b24vaW1hZ2UtdXBsb2FkLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JNb2RlLCBJRWxlbWVudCwgUGFnZU1vZGUsIERPTUV2ZW50SGFuZGxlcnMsIFJvd0ZsZXgsIExpc3RUeXBlLCBMaXN0U3R5bGUgfSBmcm9tICdAbWluZGZpcmVkaWdpdGFsL2NhbnZhcy1lZGl0b3InO1xyXG5pbXBvcnQgeyBJUmFuZ2VTdHlsZSB9IGZyb20gJ0BtaW5kZmlyZWRpZ2l0YWwvY2FudmFzLWVkaXRvci9kaXN0L3NyYy9lZGl0b3IvaW50ZXJmYWNlL0xpc3RlbmVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZW1waGFzaXMnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hdEJ1dHRvblRvZ2dsZU1vZHVsZSxJbWFnZVVwbG9hZEJ1dHRvbkNvbXBvbmVudF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VtcGhhc2lzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vZW1waGFzaXMuY29tcG9uZW50LmNzcycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbXBoYXNpc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdG9vbGJhcjogYW55O1xyXG4gIEBJbnB1dCgpIHRvb2xiYXJDbGFzczogYW55O1xyXG5cclxuICBjb250ZW50U3R5bGVzOiBJUmFuZ2VTdHlsZSB8IHVuZGVmaW5lZDtcclxuICBhbGlnbm1lbnQ6IHN0cmluZyA9IFJvd0ZsZXguTEVGVDtcclxuICBsaXN0VHlwZTogc3RyaW5nID0gJyc7XHJcbiAgZm9ybWF0czogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGludGVydmFsOiBhbnk7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IERPTUV2ZW50SGFuZGxlcnMuZ2V0Q29udGVudFN0eWxlcygpO1xyXG4gICAgICB0aGlzLmNvbnRlbnRTdHlsZXMgPSBkYXRhO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUZvcm1hdChmb3JtYXQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0cy5pbmRleE9mKGZvcm1hdCkgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZm9ybWF0cy5wdXNoKGZvcm1hdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1hdHMgPSB0aGlzLmZvcm1hdHMuZmlsdGVyKChmKSA9PiBmICE9PSBmb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGwgYXBwcm9wcmlhdGUgZm9ybWF0dGluZyBmdW5jdGlvblxyXG4gICAgc3dpdGNoIChmb3JtYXQpIHtcclxuICAgICAgY2FzZSAnQm9sZCc6XHJcbiAgICAgICAgRE9NRXZlbnRIYW5kbGVycy5oYW5kbGVCb2xkKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0l0YWxpYyc6XHJcbiAgICAgICAgRE9NRXZlbnRIYW5kbGVycy5oYW5kbGVJdGFsaWMoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnVW5kZXJsaW5lJzpcclxuICAgICAgICBET01FdmVudEhhbmRsZXJzLmhhbmRsZVVuZGVybGluZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdTdHJpa2V0aHJvdWdoJzpcclxuICAgICAgICBET01FdmVudEhhbmRsZXJzLmhhbmRsZVN0cmlrZW91dCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVW5kbygpOiB2b2lkIHtcclxuICAgIERPTUV2ZW50SGFuZGxlcnMuaGFuZGxlVW5kbygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVkbygpOiB2b2lkIHtcclxuICAgIERPTUV2ZW50SGFuZGxlcnMuaGFuZGxlUmVkbygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWxpZ25tZW50KGFsaWdubWVudDogUm93RmxleCk6IHZvaWQge1xyXG4gICAgRE9NRXZlbnRIYW5kbGVycy5oYW5kbGVBbGlnbihhbGlnbm1lbnQpO1xyXG4gICAgdGhpcy5hbGlnbm1lbnQgPSBhbGlnbm1lbnQ7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMaXN0KHR5cGU6IExpc3RUeXBlKTogdm9pZCB7XHJcbiAgICBET01FdmVudEhhbmRsZXJzLmhhbmRsZUxpc3QodHlwZSwgTGlzdFN0eWxlLkRFQ0lNQUwpO1xyXG4gICAgdGhpcy5saXN0VHlwZSA9IHRoaXMubGlzdFR5cGUgPT09IHR5cGUgPyAnJyA6IHR5cGU7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0Q29sb3IoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBjb2xvciA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBET01FdmVudEhhbmRsZXJzLnNldEZvbnRDb2xvcihjb2xvcik7XHJcbiAgfVxyXG5cclxuICAvLyBzZXRCYWNrZ3JvdW5kQ29sb3IoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgLy8gICBjb25zdCBjb2xvciA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgLy8gICBET01FdmVudEhhbmRsZXJzLnNldChjb2xvcik7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjbGVhckZvcm1hdHRpbmcoKTogdm9pZCB7XHJcbiAgLy8gICB0aGlzLmZvcm1hdHMgPSBbXTtcclxuICAvLyAgIERPTUV2ZW50SGFuZGxlcnMuY2xlYXIoKTtcclxuICAvLyB9XHJcbiAgb25JbWFnZVNlbGVjdGVkKGV2ZW50OiB7IGJhc2U2NDogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICBET01FdmVudEhhbmRsZXJzLnNldEltYWdlKHtcclxuICAgICAgdmFsdWU6IGV2ZW50LmJhc2U2NCxcclxuICAgICAgaGVpZ2h0OiBldmVudC5oZWlnaHQsXHJcbiAgICAgIHdpZHRoOiBldmVudC53aWR0aCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8IS0tIEZpcnN0IHNlY3Rpb246IFVuZG8sIFJlZG8gLS0+XHJcbjxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCBuYW1lPVwiZm9udFN0eWxlXCIgYXJpYS1sYWJlbD1cIkZvbnQgU3R5bGVcIiBtdWx0aXBsZT5cclxuICA8IS0tIFVuZG8gQnV0dG9uIC0tPlxyXG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInVuZG9cIiAoY2xpY2spPVwiaGFuZGxlVW5kbygpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kLTE4XCI+dW5kbzwvc3Bhbj5cclxuICA8L21hdC1idXR0b24tdG9nZ2xlPlxyXG5cclxuICA8IS0tIFJlZG8gQnV0dG9uIC0tPlxyXG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInJlZG9cIiAoY2xpY2spPVwiaGFuZGxlUmVkbygpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kLTE4XCI+cmVkbzwvc3Bhbj5cclxuICA8L21hdC1idXR0b24tdG9nZ2xlPlxyXG48L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxyXG5cclxuXHJcbjwhLS0gU2Vjb25kIHNlY3Rpb246IEJvbGQsIEl0YWxpYywgVW5kZXJsaW5lIC0tPlxyXG48bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbmFtZT1cInRleHRTdHlsZVwiIGFyaWEtbGFiZWw9XCJUZXh0IFN0eWxlXCIgbXVsdGlwbGU+XHJcbiAgPCEtLSBCb2xkIEJ1dHRvbiAtLT5cclxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJib2xkXCIgKGNsaWNrKT1cInRvZ2dsZUZvcm1hdCgnQm9sZCcpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kLTE4XCI+Zm9ybWF0X2JvbGQ8L3NwYW4+XHJcbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cclxuXHJcbiAgPCEtLSBJdGFsaWMgQnV0dG9uIC0tPlxyXG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIml0YWxpY1wiIChjbGljayk9XCJ0b2dnbGVGb3JtYXQoJ0l0YWxpYycpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kLTE4XCI+Zm9ybWF0X2l0YWxpYzwvc3Bhbj5cclxuICA8L21hdC1idXR0b24tdG9nZ2xlPlxyXG5cclxuICA8IS0tIFVuZGVybGluZSBCdXR0b24gLS0+XHJcbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwidW5kZXJsaW5lXCIgKGNsaWNrKT1cInRvZ2dsZUZvcm1hdCgnVW5kZXJsaW5lJylcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWQtMThcIj5mb3JtYXRfdW5kZXJsaW5lZDwvc3Bhbj5cclxuICA8L21hdC1idXR0b24tdG9nZ2xlPlxyXG48L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxyXG5cclxuXHJcbjwhLS0gVGhpcmQgc2VjdGlvbjogSW1hZ2UgdXBsb2FkIGJ1dHRvbiAtLT5cclxuPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIG5hbWU9XCJpbWFnZVVwbG9hZFwiIGFyaWEtbGFiZWw9XCJJbWFnZSBVcGxvYWRcIj5cclxuICA8bWF0LWJ1dHRvbi10b2dnbGUgY2xhc3M9XCJ1cGxvYWQtaW1hZ2UtYnV0dG9uXCI+XHJcbiAgICA8YXBwLWltYWdlLXVwbG9hZC1idXR0b24gKGltYWdlU2VsZWN0ZWQpPVwib25JbWFnZVNlbGVjdGVkKCRldmVudClcIj48L2FwcC1pbWFnZS11cGxvYWQtYnV0dG9uPlxyXG4gIDwvbWF0LWJ1dHRvbi10b2dnbGU+XHJcbjwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XHJcbiJdfQ==