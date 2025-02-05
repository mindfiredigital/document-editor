import { Component } from '@angular/core';
import { RowFlex, } from '@mindfiredigital/canvas-editor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EmphasisComponent } from '../emphasis/emphasis.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
export class EditorToolbarComponent {
    constructor() {
        this.alignment = RowFlex.LEFT;
        this.listType = '';
        this.formats = [];
    }
    ngOnInit() {
        // let interval: any;
        // const timeout = setTimeout(() => {
        //   interval = setInterval(() => {
        //     const data = DOMEventHandlers.getContentStyles();
        //     this.contentStyles = data;
        //   }, 100);
        // }, 1000);
    }
    addFormat(format) {
        let selectedFormats;
        if (this.formats.indexOf(format) === -1) {
            selectedFormats = [...this.formats, format];
        }
        else {
            selectedFormats = this.formats.filter((item) => item !== format);
        }
        this.formats = selectedFormats;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EditorToolbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: EditorToolbarComponent, isStandalone: true, selector: "lib-editor-toolbar", ngImport: i0, template: "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <lib-emphasis></lib-emphasis>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>", styles: ["mat-toolbar-row{display:flex;justify-content:center}\n"], dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: EmphasisComponent, selector: "lib-emphasis", inputs: ["toolbar", "toolbarClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: EditorToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-editor-toolbar', standalone: true, imports: [
                        MatToolbarModule,
                        MatButtonModule,
                        MatIconModule,
                        EmphasisComponent,
                    ], template: "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <lib-emphasis></lib-emphasis>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>", styles: ["mat-toolbar-row{display:flex;justify-content:center}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2FudmFzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdG9yLXRvb2xiYXIvZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2FudmFzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdG9yLXRvb2xiYXIvZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBSUwsT0FBTyxHQUNSLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBYW5FLE1BQU0sT0FBTyxzQkFBc0I7SUFNakM7UUFKQSxjQUFTLEdBQVcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNqQyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBYSxFQUFFLENBQUM7SUFFUixDQUFDO0lBRWhCLFFBQVE7UUFDTixxQkFBcUI7UUFDckIscUNBQXFDO1FBQ3JDLG1DQUFtQztRQUNuQyx3REFBd0Q7UUFDeEQsaUNBQWlDO1FBQ2pDLGFBQWE7UUFDYixZQUFZO0lBQ2QsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLElBQUksZUFBZSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN4QyxlQUFlLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsQ0FBQzthQUFNLENBQUM7WUFDTixlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7SUFDakMsQ0FBQztrSUExQlUsc0JBQXNCO3NIQUF0QixzQkFBc0IsOEVDdkJuQyx1SUFJYywrR0RXVixnQkFBZ0IseVBBQ2hCLGVBQWUsOEJBQ2YsYUFBYSwrQkFDYixpQkFBaUI7OzRGQUtSLHNCQUFzQjtrQkFabEMsU0FBUzsrQkFDRSxvQkFBb0IsY0FDbEIsSUFBSSxXQUNQO3dCQUNQLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGlCQUFpQjtxQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIERPTUV2ZW50SGFuZGxlcnMsXHJcbiAgTGlzdFN0eWxlLFxyXG4gIExpc3RUeXBlLFxyXG4gIFJvd0ZsZXgsXHJcbn0gZnJvbSAnQG1pbmRmaXJlZGlnaXRhbC9jYW52YXMtZWRpdG9yJztcclxuaW1wb3J0IHsgTWF0VG9vbGJhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IEVtcGhhc2lzQ29tcG9uZW50IH0gZnJvbSAnLi4vZW1waGFzaXMvZW1waGFzaXMuY29tcG9uZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZWRpdG9yLXRvb2xiYXInLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBFbXBoYXNpc0NvbXBvbmVudCxcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0b3ItdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2VkaXRvci10b29sYmFyLmNvbXBvbmVudC5jc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdG9yVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29udGVudFN0eWxlczogYW55O1xyXG4gIGFsaWdubWVudDogc3RyaW5nID0gUm93RmxleC5MRUZUO1xyXG4gIGxpc3RUeXBlOiBzdHJpbmcgPSAnJztcclxuICBmb3JtYXRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gbGV0IGludGVydmFsOiBhbnk7XHJcbiAgICAvLyBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IGRhdGEgPSBET01FdmVudEhhbmRsZXJzLmdldENvbnRlbnRTdHlsZXMoKTtcclxuICAgIC8vICAgICB0aGlzLmNvbnRlbnRTdHlsZXMgPSBkYXRhO1xyXG4gICAgLy8gICB9LCAxMDApO1xyXG4gICAgLy8gfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBhZGRGb3JtYXQoZm9ybWF0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCBzZWxlY3RlZEZvcm1hdHM7XHJcbiAgICBpZiAodGhpcy5mb3JtYXRzLmluZGV4T2YoZm9ybWF0KSA9PT0gLTEpIHtcclxuICAgICAgc2VsZWN0ZWRGb3JtYXRzID0gWy4uLnRoaXMuZm9ybWF0cywgZm9ybWF0XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGVjdGVkRm9ybWF0cyA9IHRoaXMuZm9ybWF0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGZvcm1hdCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1hdHMgPSBzZWxlY3RlZEZvcm1hdHM7XHJcbiAgfVxyXG59XHJcbiIsIjxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cclxuICA8bWF0LXRvb2xiYXItcm93PlxyXG4gICAgPGxpYi1lbXBoYXNpcz48L2xpYi1lbXBoYXNpcz5cclxuICA8L21hdC10b29sYmFyLXJvdz5cclxuPC9tYXQtdG9vbGJhcj4iXX0=