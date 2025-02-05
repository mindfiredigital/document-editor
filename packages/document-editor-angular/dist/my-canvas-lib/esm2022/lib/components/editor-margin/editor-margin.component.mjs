import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DocumentService } from '../../services/document.service';
import { MarginDialogComponent } from './margin-modal/margin-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/dialog";
import * as i3 from "../../services/document.service";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
export class EditorMarginComponent {
    constructor(fb, dialog, documentService) {
        this.fb = fb;
        this.dialog = dialog;
        this.documentService = documentService;
        this.documentId = '123'; // Simulated document ID, you can get this dynamically
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EditorMarginComponent, deps: [{ token: i1.FormBuilder }, { token: i2.MatDialog }, { token: i3.DocumentService }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: EditorMarginComponent, isStandalone: true, selector: "app-editor-margin", ngImport: i0, template: "<button mat-button (click)=\"openDialog()\">\r\n    <mat-icon>document_scanner</mat-icon>\r\n  </button>\r\n  ", styles: [""], dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "ngmodule", type: MatInputModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EditorMarginComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-editor-margin', standalone: true, imports: [MatDialogModule,
                        MatButtonModule,
                        MatFormFieldModule,
                        MatInputModule,
                        ReactiveFormsModule,
                        MatIconModule], template: "<button mat-button (click)=\"openDialog()\">\r\n    <mat-icon>document_scanner</mat-icon>\r\n  </button>\r\n  " }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }, { type: i2.MatDialog }, { type: i3.DocumentService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLW1hcmdpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1jYW52YXMtbGliL3NyYy9saWIvY29tcG9uZW50cy9lZGl0b3ItbWFyZ2luL2VkaXRvci1tYXJnaW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2FudmFzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdG9yLW1hcmdpbi9lZGl0b3ItbWFyZ2luLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFhLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQWF6RCxNQUFNLE9BQU8scUJBQXFCO0lBSWhDLFlBQ1UsRUFBZSxFQUNoQixNQUFpQixFQUNoQixlQUFnQztRQUZoQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDaEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBTDFDLGVBQVUsR0FBVyxLQUFLLENBQUMsQ0FBRSxzREFBc0Q7UUFPakYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMvQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZO2FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUN4RCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtTQUMxQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLElBQUksTUFBTSxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztrSUExQ1UscUJBQXFCO3NIQUFyQixxQkFBcUIsNkVDdEJsQyxnSEFHRSx5RERZVSxlQUFlLDhCQUN2QixlQUFlLDJOQUNmLGtCQUFrQiw4QkFDbEIsY0FBYyw4QkFDZCxtQkFBbUIsOEJBQ25CLGFBQWE7OzRGQUVKLHFCQUFxQjtrQkFaakMsU0FBUzsrQkFDRSxtQkFBbUIsY0FHakIsSUFBSSxXQUNQLENBQUMsZUFBZTt3QkFDdkIsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRG9jdW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZG9jdW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcmdpbkRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vbWFyZ2luLW1vZGFsL21hcmdpbi1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWVkaXRvci1tYXJnaW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0b3ItbWFyZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9lZGl0b3ItbWFyZ2luLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdG9yTWFyZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBtYXJnaW5zRm9ybTogRm9ybUdyb3VwO1xyXG4gIGRvY3VtZW50SWQ6IHN0cmluZyA9ICcxMjMnOyAgLy8gU2ltdWxhdGVkIGRvY3VtZW50IElELCB5b3UgY2FuIGdldCB0aGlzIGR5bmFtaWNhbGx5XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICBwcml2YXRlIGRvY3VtZW50U2VydmljZTogRG9jdW1lbnRTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLm1hcmdpbnNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHRvcDogWzBdLFxyXG4gICAgICBib3R0b206IFswXSxcclxuICAgICAgbGVmdDogWzBdLFxyXG4gICAgICByaWdodDogWzBdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gRmV0Y2ggdGhlIG1hcmdpbnMgc3RhdGUgb24gbG9hZFxyXG4gICAgdGhpcy5kb2N1bWVudFNlcnZpY2UubWFyZ2lucyQuc3Vic2NyaWJlKG1hcmdpbnMgPT4ge1xyXG4gICAgICB0aGlzLm1hcmdpbnNGb3JtLnBhdGNoVmFsdWUobWFyZ2lucyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEZWJvdW5jZSBmb3JtIGNoYW5nZXMgYmVmb3JlIHNhdmluZ1xyXG4gICAgdGhpcy5tYXJnaW5zRm9ybS52YWx1ZUNoYW5nZXNcclxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXHJcbiAgICAgIC5zdWJzY3JpYmUobWFyZ2lucyA9PiB7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudFNlcnZpY2Uuc2V0UGFwZXJNYXJnaW5zKG1hcmdpbnMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1hcmdpbkRpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICB3aWR0aDogJzMwMHB4JyxcclxuICAgICAgZGF0YTogeyBtYXJnaW5zOiB0aGlzLm1hcmdpbnNGb3JtLnZhbHVlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5tYXJnaW5zRm9ybS5zZXRWYWx1ZShyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5cclxuICAgIDxtYXQtaWNvbj5kb2N1bWVudF9zY2FubmVyPC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuICAiXX0=