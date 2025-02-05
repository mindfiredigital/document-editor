import { EventEmitter, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ImageUploadButtonComponent {
    fileInput: ElementRef<HTMLInputElement>;
    imageSelected: EventEmitter<{
        base64: string;
        width: number;
        height: number;
    }>;
    handleFileInputChange(event: Event): void;
    handleButtonClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageUploadButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageUploadButtonComponent, "app-image-upload-button", never, {}, { "imageSelected": "imageSelected"; }, never, never, true, never>;
}
