import { Component } from '@angular/core';
// import all necessary
import { MarginRulerComponent } from '../margin-ruler/margin-ruler.component';
import { DOMEventHandlers, EditorMode, PageMode } from '@mindfiredigital/canvas-editor';
import * as i0 from "@angular/core";
export class CanvasEditorComponent {
    constructor() {
        this.props = {};
        this.documentId = '0';
        this.dropdown = {
            left: 1180,
            top: 250,
            visiblity: false,
        };
        this.editorContent = [];
        this.selectedText = '';
    }
    ngOnInit() {
        const container = document.querySelector('.canvas-editor');
        if (container.querySelector('[editor-component="main"]')) {
            return;
        }
        const editorOptions = {
            height: 1056,
            width: 816,
            mode: EditorMode.EDIT,
            pageMode: PageMode.PAGING,
            pageNumber: {
                format: '{pageNo}/{pageCount}',
            },
            minSize: 1,
            maxSize: 72,
        };
        // container.addEventListener('mouseup', (e) => {
        //   _props.onSelect && _props?.onSelect(DOMEventHandlers.getSelectedText());
        // })
        // container.addEventListener('keydown', (e) => {
        //   const text = DOMEventHandlers.getContent()?.data?.main;
        //   setEditorContent(text);
        //   _props?.onChange && _props?.onChange(text[0].value);
        // })
        DOMEventHandlers?.register(container, this.editorContent, {});
        DOMEventHandlers?.setContent({ main: [{ value: 'hello' }] });
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CanvasEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CanvasEditorComponent, isStandalone: true, selector: "lib-canvas-editor", ngImport: i0, template: "<div class=\"canvas-editor-main\">\r\n  <div class=\"canvas-editor editor\" id=\"canvasEditorRef\">\r\n    <!-- <lib-margin-ruler [documentId]=\"documentId\"></lib-margin-ruler> -->\r\n  </div>\r\n</div>", styles: [".editor>div{margin:0}.canvas-editor{position:relative}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CanvasEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-canvas-editor', standalone: true, imports: [MarginRulerComponent], template: "<div class=\"canvas-editor-main\">\r\n  <div class=\"canvas-editor editor\" id=\"canvasEditorRef\">\r\n    <!-- <lib-margin-ruler [documentId]=\"documentId\"></lib-margin-ruler> -->\r\n  </div>\r\n</div>", styles: [".editor>div{margin:0}.canvas-editor{position:relative}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1jYW52YXMtbGliL3NyYy9saWIvY29tcG9uZW50cy9jYW52YXMtZWRpdG9yL2NhbnZhcy1lZGl0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2FudmFzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY2FudmFzLWVkaXRvci9jYW52YXMtZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLHVCQUF1QjtBQUV2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQVN4RixNQUFNLE9BQU8scUJBQXFCO0lBYWhDO1FBWkEsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQVcsR0FBRyxDQUFDO1FBRXpCLGFBQVEsR0FBRztZQUNULElBQUksRUFBRSxJQUFJO1lBQ1YsR0FBRyxFQUFFLEdBQUc7WUFDUixTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDO1FBQ0Ysa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFFeEIsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFFSCxDQUFDO0lBRWhCLFFBQVE7UUFDTixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN0QyxnQkFBZ0IsQ0FDQyxDQUFDO1FBRXBCLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLENBQUM7WUFDekQsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLGFBQWEsR0FBRztZQUNwQixNQUFNLEVBQUUsSUFBSTtZQUNaLEtBQUssRUFBRSxHQUFHO1lBQ1YsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1lBQ3JCLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTTtZQUN6QixVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLHNCQUFzQjthQUMvQjtZQUNELE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBRUYsaURBQWlEO1FBQ2pELDZFQUE2RTtRQUM3RSxLQUFLO1FBRUwsaURBQWlEO1FBQ2pELDREQUE0RDtRQUM1RCw0QkFBNEI7UUFDNUIseURBQXlEO1FBQ3pELEtBQUs7UUFDTCxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUQsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztrSUEvQ1UscUJBQXFCO3NIQUFyQixxQkFBcUIsNkVDYmxDLDZNQUlNOzs0RkRTTyxxQkFBcUI7a0JBUGpDLFNBQVM7K0JBQ0UsbUJBQW1CLGNBQ2pCLElBQUksV0FDUCxDQUFDLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgYWxsIG5lY2Vzc2FyeVxyXG5cclxuaW1wb3J0IHsgTWFyZ2luUnVsZXJDb21wb25lbnQgfSBmcm9tICcuLi9tYXJnaW4tcnVsZXIvbWFyZ2luLXJ1bGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERPTUV2ZW50SGFuZGxlcnMsIEVkaXRvck1vZGUsIFBhZ2VNb2RlIH0gZnJvbSAnQG1pbmRmaXJlZGlnaXRhbC9jYW52YXMtZWRpdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWNhbnZhcy1lZGl0b3InLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW01hcmdpblJ1bGVyQ29tcG9uZW50XSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FudmFzLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2NhbnZhcy1lZGl0b3IuY29tcG9uZW50LmNzcycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByb3BzOiBhbnkgPSB7fTtcclxuICBkb2N1bWVudElkOiBzdHJpbmcgPSAnMCc7XHJcbiAgY2FudmFzRWRpdG9yUmVmOiBhbnk7XHJcbiAgZHJvcGRvd24gPSB7XHJcbiAgICBsZWZ0OiAxMTgwLFxyXG4gICAgdG9wOiAyNTAsXHJcbiAgICB2aXNpYmxpdHk6IGZhbHNlLFxyXG4gIH07XHJcbiAgZWRpdG9yQ29udGVudDogYW55ID0gW107XHJcblxyXG4gIHNlbGVjdGVkVGV4dCA9ICcnO1xyXG4gIGluc3RhbmNlOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuY2FudmFzLWVkaXRvcidcclxuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbZWRpdG9yLWNvbXBvbmVudD1cIm1haW5cIl0nKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdG9yT3B0aW9ucyA9IHtcclxuICAgICAgaGVpZ2h0OiAxMDU2LFxyXG4gICAgICB3aWR0aDogODE2LFxyXG4gICAgICBtb2RlOiBFZGl0b3JNb2RlLkVESVQsXHJcbiAgICAgIHBhZ2VNb2RlOiBQYWdlTW9kZS5QQUdJTkcsXHJcbiAgICAgIHBhZ2VOdW1iZXI6IHtcclxuICAgICAgICBmb3JtYXQ6ICd7cGFnZU5vfS97cGFnZUNvdW50fScsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1pblNpemU6IDEsXHJcbiAgICAgIG1heFNpemU6IDcyLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XHJcbiAgICAvLyAgIF9wcm9wcy5vblNlbGVjdCAmJiBfcHJvcHM/Lm9uU2VsZWN0KERPTUV2ZW50SGFuZGxlcnMuZ2V0U2VsZWN0ZWRUZXh0KCkpO1xyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvLyBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IHRleHQgPSBET01FdmVudEhhbmRsZXJzLmdldENvbnRlbnQoKT8uZGF0YT8ubWFpbjtcclxuICAgIC8vICAgc2V0RWRpdG9yQ29udGVudCh0ZXh0KTtcclxuICAgIC8vICAgX3Byb3BzPy5vbkNoYW5nZSAmJiBfcHJvcHM/Lm9uQ2hhbmdlKHRleHRbMF0udmFsdWUpO1xyXG4gICAgLy8gfSlcclxuICAgIERPTUV2ZW50SGFuZGxlcnM/LnJlZ2lzdGVyKGNvbnRhaW5lciwgdGhpcy5lZGl0b3JDb250ZW50LCB7fSk7XHJcbiAgICBET01FdmVudEhhbmRsZXJzPy5zZXRDb250ZW50KHsgbWFpbjogW3sgdmFsdWU6ICdoZWxsbycgfV0gfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjYW52YXMtZWRpdG9yLW1haW5cIj5cclxuICA8ZGl2IGNsYXNzPVwiY2FudmFzLWVkaXRvciBlZGl0b3JcIiBpZD1cImNhbnZhc0VkaXRvclJlZlwiPlxyXG4gICAgPCEtLSA8bGliLW1hcmdpbi1ydWxlciBbZG9jdW1lbnRJZF09XCJkb2N1bWVudElkXCI+PC9saWItbWFyZ2luLXJ1bGVyPiAtLT5cclxuICA8L2Rpdj5cclxuPC9kaXY+Il19