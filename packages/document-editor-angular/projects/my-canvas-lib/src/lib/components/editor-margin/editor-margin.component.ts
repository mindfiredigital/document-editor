import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DocumentService } from '../../services/document.service';
import { MarginDialogComponent } from './margin-modal/margin-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-editor-margin',
  templateUrl: './editor-margin.component.html',
  styleUrls: ['./editor-margin.component.css'],
  standalone: true,
  imports: [MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule]
})
export class EditorMarginComponent implements OnInit {
  marginsForm: FormGroup;
  documentId: string = '123';  // Simulated document ID, you can get this dynamically

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private documentService: DocumentService
  ) {
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

  openDialog(): void {
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
}
