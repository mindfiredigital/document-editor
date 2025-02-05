import { Component, Input } from '@angular/core';
import { DocumentReducerService } from '../util/document-reducer.service';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor';
import { CustomSliderVerticalComponent } from './custom-slider-vertical/custom-slider-vertical.component';
import { CustomSliderHorizontalComponent } from './custom-slider-horizontal/custom-slider-horizontal.component';
import { store } from '../util/store';
import useDebounce from '../util/useDebounce';
import * as i0 from "@angular/core";
import * as i1 from "../util/document-reducer.service";
export class MarginRulerComponent {
    constructor(documentService) {
        this.documentService = documentService;
        this.verticalSlider = [];
        this.horizontalSlider = [];
        this.margins = [];
    }
    ngOnInit() {
        if (!this.documentId) {
            console.error('Document ID is not provided.');
            return;
        }
        const documentState = store();
        if (!documentState || !documentState.margins) {
            console.error('Margins are not available in the document state.');
            return;
        }
        this.margins = useDebounce(documentState.margins, 500);
        if (this.margins.length) {
            this.verticalSlider = [-956, -100];
            this.horizontalSlider = [120, 696];
            if (!this.verticalSlider.length && !this.horizontalSlider.length) {
                DOMEventHandlers.setPaperMargins(this.margins);
            }
        }
        // this.documentService = new DocumentService();
    }
    handleChange(event, value) {
        const [bottom, top] = value;
        this.verticalSlider = value;
        const margin = [...this.margins];
        margin[0] = Math.abs(top);
        margin[1] = 1056 - Math.abs(bottom);
        DOMEventHandlers.setPaperMargins(margin);
        this.documentService.setDocumentMargins({ margins: margin });
    }
    handleChangeHorizontal(event, value) {
        const [left, right] = value;
        this.horizontalSlider = value;
        const margin = [...this.margins];
        margin[2] = left;
        margin[3] = 816 - right;
        DOMEventHandlers.setPaperMargins(margin);
        this.documentService.setDocumentMargins({ margins: margin });
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MarginRulerComponent, deps: [{ token: i1.DocumentReducerService }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: MarginRulerComponent, isStandalone: true, selector: "lib-margin-ruler", inputs: { documentId: "documentId" }, ngImport: i0, template: "<div style=\"position: relative;\">\r\n  <!-- <lib-custom-slider-vertical [value]=\"verticalSlider.length ? verticalSlider : [-956, -100]\" [min]=\"-1056\" [max]=\"0\"\r\n    [marks]=\"verticalMarks\" (change)=\"handleChange($event)\" [step]=\"24\" [size]=\"'small'\"\r\n    [slots]=\"{ thumb: MarginRightArrow }\" valueLabelDisplay=\"off\"></lib-custom-slider-vertical>\r\n  <lib-custom-slider-horizontal [value]=\"horizontalSlider.length ? horizontalSlider : [120, 696]\" [min]=\"0\" [max]=\"816\"\r\n    [marks]=\"horizontalMarks\" (change)=\"handleChangeHorizontal($event)\" [step]=\"24\" [size]=\"'small'\"\r\n    [slots]=\"{ thumb: MarginDownArrow }\" valueLabelDisplay=\"off\"></lib-custom-slider-horizontal> -->\r\n</div>", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MarginRulerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-margin-ruler', standalone: true, imports: [CustomSliderVerticalComponent, CustomSliderHorizontalComponent], template: "<div style=\"position: relative;\">\r\n  <!-- <lib-custom-slider-vertical [value]=\"verticalSlider.length ? verticalSlider : [-956, -100]\" [min]=\"-1056\" [max]=\"0\"\r\n    [marks]=\"verticalMarks\" (change)=\"handleChange($event)\" [step]=\"24\" [size]=\"'small'\"\r\n    [slots]=\"{ thumb: MarginRightArrow }\" valueLabelDisplay=\"off\"></lib-custom-slider-vertical>\r\n  <lib-custom-slider-horizontal [value]=\"horizontalSlider.length ? horizontalSlider : [120, 696]\" [min]=\"0\" [max]=\"816\"\r\n    [marks]=\"horizontalMarks\" (change)=\"handleChangeHorizontal($event)\" [step]=\"24\" [size]=\"'small'\"\r\n    [slots]=\"{ thumb: MarginDownArrow }\" valueLabelDisplay=\"off\"></lib-custom-slider-horizontal> -->\r\n</div>" }]
        }], ctorParameters: () => [{ type: i1.DocumentReducerService }], propDecorators: { documentId: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyZ2luLXJ1bGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWNhbnZhcy1saWIvc3JjL2xpYi9jb21wb25lbnRzL21hcmdpbi1ydWxlci9tYXJnaW4tcnVsZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2FudmFzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbWFyZ2luLXJ1bGVyL21hcmdpbi1ydWxlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNoSCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sV0FBVyxNQUFNLHFCQUFxQixDQUFDOzs7QUFTOUMsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQixZQUFvQixlQUF1QztRQUF2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFKM0QsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFDOUIscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBQ2hDLFlBQU8sR0FBUSxFQUFFLENBQUM7SUFFNEMsQ0FBQztJQUUvRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDOUMsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLGFBQWEsR0FBUSxLQUFLLEVBQUUsQ0FBQztRQUVuQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztZQUNsRSxPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdkQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2pFLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsQ0FBQztRQUNILENBQUM7UUFFRCxnREFBZ0Q7SUFDbEQsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFZLEVBQUUsS0FBZTtRQUN4QyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUU1QixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxLQUFZLEVBQUUsS0FBZTtRQUNsRCxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRTlCLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNqQixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUV4QixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7a0lBekRVLG9CQUFvQjtzSEFBcEIsb0JBQW9CLGtIQ2ZqQywydEJBT007OzRGRFFPLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSxrQkFBa0IsY0FDaEIsSUFBSSxXQUNQLENBQUMsNkJBQTZCLEVBQUUsK0JBQStCLENBQUM7MkZBS2hFLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9jdW1lbnRSZWR1Y2VyU2VydmljZSB9IGZyb20gJy4uL3V0aWwvZG9jdW1lbnQtcmVkdWNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRE9NRXZlbnRIYW5kbGVycyB9IGZyb20gJ0BtaW5kZmlyZWRpZ2l0YWwvY2FudmFzLWVkaXRvcic7XHJcbmltcG9ydCB7IEN1c3RvbVNsaWRlclZlcnRpY2FsQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20tc2xpZGVyLXZlcnRpY2FsL2N1c3RvbS1zbGlkZXItdmVydGljYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3VzdG9tU2xpZGVySG9yaXpvbnRhbENvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tLXNsaWRlci1ob3Jpem9udGFsL2N1c3RvbS1zbGlkZXItaG9yaXpvbnRhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3V0aWwvc3RvcmUnO1xyXG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSAnLi4vdXRpbC91c2VEZWJvdW5jZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1tYXJnaW4tcnVsZXInLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0N1c3RvbVNsaWRlclZlcnRpY2FsQ29tcG9uZW50LCBDdXN0b21TbGlkZXJIb3Jpem9udGFsQ29tcG9uZW50XSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWFyZ2luLXJ1bGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tYXJnaW4tcnVsZXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFyZ2luUnVsZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRvY3VtZW50SWQhOiBzdHJpbmc7XHJcbiAgdmVydGljYWxTbGlkZXI6IG51bWJlcltdID0gW107XHJcbiAgaG9yaXpvbnRhbFNsaWRlcjogbnVtYmVyW10gPSBbXTtcclxuICBtYXJnaW5zOiBhbnkgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudFNlcnZpY2U6IERvY3VtZW50UmVkdWNlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRvY3VtZW50SWQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRG9jdW1lbnQgSUQgaXMgbm90IHByb3ZpZGVkLicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZG9jdW1lbnRTdGF0ZTogYW55ID0gc3RvcmUoKTtcclxuXHJcbiAgICBpZiAoIWRvY3VtZW50U3RhdGUgfHwgIWRvY3VtZW50U3RhdGUubWFyZ2lucykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdNYXJnaW5zIGFyZSBub3QgYXZhaWxhYmxlIGluIHRoZSBkb2N1bWVudCBzdGF0ZS4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWFyZ2lucyA9IHVzZURlYm91bmNlKGRvY3VtZW50U3RhdGUubWFyZ2lucywgNTAwKTtcclxuXHJcbiAgICBpZiAodGhpcy5tYXJnaW5zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnZlcnRpY2FsU2xpZGVyID0gWy05NTYsIC0xMDBdO1xyXG4gICAgICB0aGlzLmhvcml6b250YWxTbGlkZXIgPSBbMTIwLCA2OTZdO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLnZlcnRpY2FsU2xpZGVyLmxlbmd0aCAmJiAhdGhpcy5ob3Jpem9udGFsU2xpZGVyLmxlbmd0aCkge1xyXG4gICAgICAgIERPTUV2ZW50SGFuZGxlcnMuc2V0UGFwZXJNYXJnaW5zKHRoaXMubWFyZ2lucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzLmRvY3VtZW50U2VydmljZSA9IG5ldyBEb2N1bWVudFNlcnZpY2UoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZShldmVudDogRXZlbnQsIHZhbHVlOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgY29uc3QgW2JvdHRvbSwgdG9wXSA9IHZhbHVlO1xyXG4gICAgdGhpcy52ZXJ0aWNhbFNsaWRlciA9IHZhbHVlO1xyXG5cclxuICAgIGNvbnN0IG1hcmdpbiA9IFsuLi50aGlzLm1hcmdpbnNdO1xyXG4gICAgbWFyZ2luWzBdID0gTWF0aC5hYnModG9wKTtcclxuICAgIG1hcmdpblsxXSA9IDEwNTYgLSBNYXRoLmFicyhib3R0b20pO1xyXG5cclxuICAgIERPTUV2ZW50SGFuZGxlcnMuc2V0UGFwZXJNYXJnaW5zKG1hcmdpbik7XHJcbiAgICB0aGlzLmRvY3VtZW50U2VydmljZS5zZXREb2N1bWVudE1hcmdpbnMoeyBtYXJnaW5zOiBtYXJnaW4gfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2VIb3Jpem9udGFsKGV2ZW50OiBFdmVudCwgdmFsdWU6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICBjb25zdCBbbGVmdCwgcmlnaHRdID0gdmFsdWU7XHJcbiAgICB0aGlzLmhvcml6b250YWxTbGlkZXIgPSB2YWx1ZTtcclxuXHJcbiAgICBjb25zdCBtYXJnaW4gPSBbLi4udGhpcy5tYXJnaW5zXTtcclxuICAgIG1hcmdpblsyXSA9IGxlZnQ7XHJcbiAgICBtYXJnaW5bM10gPSA4MTYgLSByaWdodDtcclxuXHJcbiAgICBET01FdmVudEhhbmRsZXJzLnNldFBhcGVyTWFyZ2lucyhtYXJnaW4pO1xyXG4gICAgdGhpcy5kb2N1bWVudFNlcnZpY2Uuc2V0RG9jdW1lbnRNYXJnaW5zKHsgbWFyZ2luczogbWFyZ2luIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxyXG4gIDwhLS0gPGxpYi1jdXN0b20tc2xpZGVyLXZlcnRpY2FsIFt2YWx1ZV09XCJ2ZXJ0aWNhbFNsaWRlci5sZW5ndGggPyB2ZXJ0aWNhbFNsaWRlciA6IFstOTU2LCAtMTAwXVwiIFttaW5dPVwiLTEwNTZcIiBbbWF4XT1cIjBcIlxyXG4gICAgW21hcmtzXT1cInZlcnRpY2FsTWFya3NcIiAoY2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCIgW3N0ZXBdPVwiMjRcIiBbc2l6ZV09XCInc21hbGwnXCJcclxuICAgIFtzbG90c109XCJ7IHRodW1iOiBNYXJnaW5SaWdodEFycm93IH1cIiB2YWx1ZUxhYmVsRGlzcGxheT1cIm9mZlwiPjwvbGliLWN1c3RvbS1zbGlkZXItdmVydGljYWw+XHJcbiAgPGxpYi1jdXN0b20tc2xpZGVyLWhvcml6b250YWwgW3ZhbHVlXT1cImhvcml6b250YWxTbGlkZXIubGVuZ3RoID8gaG9yaXpvbnRhbFNsaWRlciA6IFsxMjAsIDY5Nl1cIiBbbWluXT1cIjBcIiBbbWF4XT1cIjgxNlwiXHJcbiAgICBbbWFya3NdPVwiaG9yaXpvbnRhbE1hcmtzXCIgKGNoYW5nZSk9XCJoYW5kbGVDaGFuZ2VIb3Jpem9udGFsKCRldmVudClcIiBbc3RlcF09XCIyNFwiIFtzaXplXT1cIidzbWFsbCdcIlxyXG4gICAgW3Nsb3RzXT1cInsgdGh1bWI6IE1hcmdpbkRvd25BcnJvdyB9XCIgdmFsdWVMYWJlbERpc3BsYXk9XCJvZmZcIj48L2xpYi1jdXN0b20tc2xpZGVyLWhvcml6b250YWw+IC0tPlxyXG48L2Rpdj4iXX0=