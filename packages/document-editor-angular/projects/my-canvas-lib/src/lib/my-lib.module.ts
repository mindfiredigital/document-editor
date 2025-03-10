// projects/my-lib/src/lib/my-lib.module.ts
import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { DocumentService } from './services/document.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { StoreModule } from '@ngrx/store';
import { documentReducer } from './store/document.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyLibComponent,
    MatSliderModule,
    MatIconModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ document: documentReducer }),
    BrowserAnimationsModule,
  ],
  exports: [
    MyLibComponent, // Export standalone component
    BrowserAnimationsModule,
  ],
  providers: [
    DocumentService,
    // ... other services
  ],
})
export class DocumentEditorModule {}
