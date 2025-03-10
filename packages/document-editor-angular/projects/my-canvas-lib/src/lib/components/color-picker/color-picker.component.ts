import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ColorEvent } from 'ngx-color';
import { DocumentState } from '../../store/document.reducer';
import { ColorPhotoshopModule } from 'ngx-color/photoshop';
@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  imports: [ColorPhotoshopModule],
})
export class ColorPickerComponent {
  fontColor: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<ColorPickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { color: string; feature: string },
    private store: Store<DocumentState>
  ) {
    this.fontColor = data.color || '#000000';
  }

  handleChangeColor(event: ColorEvent) {
    this.fontColor = event.color.hex;
  }

  handleOnAccept() {
    // Uncomment if using an API to save colors
    // this.store.select('document').subscribe((doc: DocumentState) => {
    //   if (this.fontColor && doc.documentId) {
    //     DocumentService.saveColorPalette({
    //       documentId: doc.documentId,
    //       color: this.fontColor,
    //       feature: this.data.feature,
    //     }).catch((error) => console.log('Error in saveColorPalette', error));
    //   }
    // });
    this.dialogRef.close(this.fontColor);
  }

  handleOnCancel() {
    this.dialogRef.close();
  }
}
