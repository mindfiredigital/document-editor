import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EditorMarginComponent } from '../editor-margin/editor-margin.component';
@Component({
  selector: 'lib-editor-footer',
  standalone: true,
  imports: [MatToolbarModule,EditorMarginComponent],
  templateUrl: './editor-footer.component.html',
  styleUrl: './editor-footer.component.css',
})
export class EditorFooterComponent {}
