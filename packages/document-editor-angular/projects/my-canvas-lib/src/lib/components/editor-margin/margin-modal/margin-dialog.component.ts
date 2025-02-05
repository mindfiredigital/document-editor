import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-margin-dialog',
  templateUrl: './margin-dialog.component.html',
  styleUrl: './margin-dialog.component.css',
  standalone: true,
  imports: [MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,]
})
export class MarginDialogComponent {
  marginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MarginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.marginForm = this.fb.group({
      top: [data.margins.top],
      bottom: [data.margins.bottom],
      left: [data.margins.left],
      right: [data.margins.right]
    });
  }

  onSave(): void {
    this.dialogRef.close(this.marginForm.value);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
