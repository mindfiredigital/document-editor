import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor'; // Import the library
import * as i0 from "@angular/core";
export class DocumentService {
    constructor() {
        this.marginsSource = new BehaviorSubject([100, 956, 120, 696]);
        this.margins$ = this.marginsSource.asObservable();
    }
    // Get margins for a specific document
    getPaperMargins() {
        return this.marginsSource.value;
    }
    // Set margins using the external DOMEventHandlers.setPaperMargins function
    setPaperMargins(margins) {
        DOMEventHandlers.setPaperMargins(margins);
        this.marginsSource.next(margins);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DocumentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DocumentService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DocumentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWNhbnZhcy1saWIvc3JjL2xpYi9zZXJ2aWNlcy9kb2N1bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQyxDQUFDLHFCQUFxQjs7QUFLeEYsTUFBTSxPQUFPLGVBQWU7SUFINUI7UUFJVSxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RSxhQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQVk5QztJQVZDLHNDQUFzQztJQUN0QyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQsMkVBQTJFO0lBQzNFLGVBQWUsQ0FBQyxPQUFpQjtRQUMvQixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztrSUFiVSxlQUFlO3NJQUFmLGVBQWUsY0FGZCxNQUFNOzs0RkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERPTUV2ZW50SGFuZGxlcnMgfSBmcm9tICdAbWluZGZpcmVkaWdpdGFsL2NhbnZhcy1lZGl0b3InOyAvLyBJbXBvcnQgdGhlIGxpYnJhcnlcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgbWFyZ2luc1NvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyW10+KFsxMDAsIDk1NiwgMTIwLCA2OTZdKTtcclxuICBtYXJnaW5zJCA9IHRoaXMubWFyZ2luc1NvdXJjZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgLy8gR2V0IG1hcmdpbnMgZm9yIGEgc3BlY2lmaWMgZG9jdW1lbnRcclxuICBnZXRQYXBlck1hcmdpbnMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubWFyZ2luc1NvdXJjZS52YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIFNldCBtYXJnaW5zIHVzaW5nIHRoZSBleHRlcm5hbCBET01FdmVudEhhbmRsZXJzLnNldFBhcGVyTWFyZ2lucyBmdW5jdGlvblxyXG4gIHNldFBhcGVyTWFyZ2lucyhtYXJnaW5zOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgRE9NRXZlbnRIYW5kbGVycy5zZXRQYXBlck1hcmdpbnMobWFyZ2lucyk7IFxyXG4gICAgdGhpcy5tYXJnaW5zU291cmNlLm5leHQobWFyZ2lucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==