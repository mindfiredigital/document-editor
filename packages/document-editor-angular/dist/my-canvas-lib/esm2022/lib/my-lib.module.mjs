// projects/my-lib/src/lib/my-lib.module.ts
import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { DocumentService } from './services/document.service';
import { EditorFooterComponent } from './components/editor-footer/editor-footer.component';
import { EditorToolbarComponent } from './components/editor-toolbar/editor-toolbar.component';
import { CanvasEditorComponent } from './components/canvas-editor/canvas-editor.component';
import * as i0 from "@angular/core";
export class MyCanvasLibModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, declarations: [MyLibComponent], imports: [EditorFooterComponent, EditorToolbarComponent, CanvasEditorComponent], exports: [MyLibComponent] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, providers: [
            DocumentService
            // ... other services
        ], imports: [EditorFooterComponent, EditorToolbarComponent, CanvasEditorComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyCanvasLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MyLibComponent],
                    imports: [EditorFooterComponent, EditorToolbarComponent, CanvasEditorComponent],
                    exports: [
                        MyLibComponent, // Export standalone component
                    ],
                    providers: [
                        DocumentService
                        // ... other services
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWNhbnZhcy1saWIvc3JjL2xpYi9teS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7O0FBZTNGLE1BQU0sT0FBTyxpQkFBaUI7a0lBQWpCLGlCQUFpQjttSUFBakIsaUJBQWlCLGlCQVZYLGNBQWMsYUFDbkIscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLGFBRTFFLGNBQWM7bUlBT1QsaUJBQWlCLGFBTGY7WUFDUCxlQUFlO1lBQ2YscUJBQXFCO1NBQ3hCLFlBUFMscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCOzs0RkFTckUsaUJBQWlCO2tCQVg3QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLENBQUM7b0JBQy9FLE9BQU8sRUFBRTt3QkFDTCxjQUFjLEVBQUUsOEJBQThCO3FCQUNqRDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1AsZUFBZTt3QkFDZixxQkFBcUI7cUJBQ3hCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcHJvamVjdHMvbXktbGliL3NyYy9saWIvbXktbGliLm1vZHVsZS50c1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNeUxpYkNvbXBvbmVudCB9IGZyb20gJy4vbXktbGliLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERvY3VtZW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZG9jdW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEVkaXRvckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0b3ItZm9vdGVyL2VkaXRvci1mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdG9yVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0b3ItdG9vbGJhci9lZGl0b3ItdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYW52YXNFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FudmFzLWVkaXRvci9jYW52YXMtZWRpdG9yLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtNeUxpYkNvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbRWRpdG9yRm9vdGVyQ29tcG9uZW50LCBFZGl0b3JUb29sYmFyQ29tcG9uZW50LCBDYW52YXNFZGl0b3JDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE15TGliQ29tcG9uZW50LCAvLyBFeHBvcnQgc3RhbmRhbG9uZSBjb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEb2N1bWVudFNlcnZpY2VcclxuICAgICAgICAvLyAuLi4gb3RoZXIgc2VydmljZXNcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15Q2FudmFzTGliTW9kdWxlIHsgfVxyXG4iXX0=