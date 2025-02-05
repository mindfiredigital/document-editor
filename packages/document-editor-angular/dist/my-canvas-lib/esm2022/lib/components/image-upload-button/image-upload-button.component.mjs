// image-upload-button.component.ts
import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export class ImageUploadButtonComponent {
    constructor() {
        this.imageSelected = new EventEmitter();
    }
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ImageUploadButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: ImageUploadButtonComponent, isStandalone: true, selector: "app-image-upload-button", outputs: { imageSelected: "imageSelected" }, viewQueries: [{ propertyName: "fileInput", first: true, predicate: ["fileInput"], descendants: true }], ngImport: i0, template: "<input type=\"file\" #fileInput (change)=\"handleFileInputChange($event)\" accept=\"image/*\" style=\"display: none;\" />\r\n<button mat-icon-button (click)=\"handleButtonClick()\">\r\n  <span class=\"material-icons md-18\">\r\n    image\r\n    </span>\r\n</button>" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ImageUploadButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-image-upload-button', standalone: true, template: "<input type=\"file\" #fileInput (change)=\"handleFileInputChange($event)\" accept=\"image/*\" style=\"display: none;\" />\r\n<button mat-icon-button (click)=\"handleButtonClick()\">\r\n  <span class=\"material-icons md-18\">\r\n    image\r\n    </span>\r\n</button>" }]
        }], propDecorators: { fileInput: [{
                type: ViewChild,
                args: ['fileInput', { static: false }]
            }], imageSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1jYW52YXMtbGliL3NyYy9saWIvY29tcG9uZW50cy9pbWFnZS11cGxvYWQtYnV0dG9uL2ltYWdlLXVwbG9hZC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2FudmFzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvaW1hZ2UtdXBsb2FkLWJ1dHRvbi9pbWFnZS11cGxvYWQtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUNuQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPdkYsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQU9ZLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXFELENBQUM7S0E2QmpHO0lBM0JDLHFCQUFxQixDQUFDLEtBQVk7UUFDaEMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQTBCLENBQUM7UUFDL0MsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzFDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUVoQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtnQkFDdEIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQWdCLENBQUM7Z0JBQzNDLE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBRXhCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO29CQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzt3QkFDdEIsTUFBTSxFQUFFLFVBQVU7d0JBQ2xCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSzt3QkFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO3FCQUNuQixDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDO2dCQUNGLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QyxDQUFDO2tJQTlCVSwwQkFBMEI7c0hBQTFCLDBCQUEwQix3T0NSdkMsMlFBS1M7OzRGREdJLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSx5QkFBeUIsY0FFdkIsSUFBSTs4QkFHMkIsU0FBUztzQkFBbkQsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUMvQixhQUFhO3NCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1hZ2UtdXBsb2FkLWJ1dHRvbi5jb21wb25lbnQudHNcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pbWFnZS11cGxvYWQtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtdXBsb2FkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWRCdXR0b25Db21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWxlSW5wdXQhOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBPdXRwdXQoKSBpbWFnZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGJhc2U2NDogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9PigpO1xyXG5cclxuICBoYW5kbGVGaWxlSW5wdXRDaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJhc2U2NERhdGEgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1hZ2VTZWxlY3RlZC5lbWl0KHtcclxuICAgICAgICAgICAgYmFzZTY0OiBiYXNlNjREYXRhLFxyXG4gICAgICAgICAgICB3aWR0aDogaW1nLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGltZy5oZWlnaHRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW1nLnNyYyA9IGJhc2U2NERhdGE7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZEZpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxpbnB1dCB0eXBlPVwiZmlsZVwiICNmaWxlSW5wdXQgKGNoYW5nZSk9XCJoYW5kbGVGaWxlSW5wdXRDaGFuZ2UoJGV2ZW50KVwiIGFjY2VwdD1cImltYWdlLypcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCIgLz5cclxuPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImhhbmRsZUJ1dHRvbkNsaWNrKClcIj5cclxuICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kLTE4XCI+XHJcbiAgICBpbWFnZVxyXG4gICAgPC9zcGFuPlxyXG48L2J1dHRvbj4iXX0=