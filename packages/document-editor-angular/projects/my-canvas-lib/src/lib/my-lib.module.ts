// projects/my-lib/src/lib/my-lib.module.ts
import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { DocumentService } from './services/document.service';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';



@NgModule({
    declarations: [MyLibComponent],
    imports: [EditorFooterComponent, EditorToolbarComponent, CanvasEditorComponent],
    exports: [
        MyLibComponent, // Export standalone component
    ],
    providers: [
        DocumentService
        // ... other services
    ]
})
export class MyCanvasLibModule { }
