// projects/my-lib/src/lib/my-lib.module.ts
import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { DocumentService } from './services/document.service';
import { CommonModule } from '@angular/common';

@NgModule({
  // declarations: [MyLibComponent],
  imports: [CommonModule, MyLibComponent],
  exports: [
    MyLibComponent, // Export standalone component
  ],
  providers: [
    DocumentService,
    // ... other services
  ],
})
export class MyCanvasLibModule {}
