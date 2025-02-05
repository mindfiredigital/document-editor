// image-upload-button.component.ts
import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-upload-button',
  templateUrl: './image-upload-button.component.html',
  standalone: true
})
export class ImageUploadButtonComponent {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
  @Output() imageSelected = new EventEmitter<{ base64: string, width: number, height: number }>();

  handleFileInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const selectedFile = input.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Data = reader.result as string;
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
}
