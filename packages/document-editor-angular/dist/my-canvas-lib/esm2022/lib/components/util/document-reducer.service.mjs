import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class DocumentReducerService {
    constructor() {
        this.initialState = {
            documentId: '',
            title: '',
            reloadRecentDoc: false,
            margins: [],
        };
        this.documentSubject = new BehaviorSubject(this.initialState);
    }
    getDocumentState() {
        return this.documentSubject
            .asObservable()
            .pipe();
    }
    setDocumentTitle(title) {
        this.documentSubject.next({ ...this.documentSubject.value, title });
    }
    reloadRecentDoc(reload) {
        this.documentSubject.next({
            ...this.documentSubject.value,
            reloadRecentDoc: reload,
        });
    }
    setDocumentMargins(margins) {
        this.documentSubject.next({ ...this.documentSubject.value, margins });
    }
    setDocumentId(documentId) {
        this.documentSubject.next({ ...this.documentSubject.value, documentId });
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DocumentReducerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DocumentReducerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DocumentReducerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtcmVkdWNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktY2FudmFzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvdXRpbC9kb2N1bWVudC1yZWR1Y2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU12QyxNQUFNLE9BQU8sc0JBQXNCO0lBWWpDO1FBWEEsaUJBQVksR0FBa0I7WUFDNUIsVUFBVSxFQUFFLEVBQUU7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULGVBQWUsRUFBRSxLQUFLO1lBQ3RCLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUVNLG9CQUFlLEdBQUcsSUFBSSxlQUFlLENBQzNDLElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUM7SUFFYSxDQUFDO0lBRWhCLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLGVBQWU7YUFDeEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxFQUVILENBQUM7SUFDUCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQWU7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDeEIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUs7WUFDN0IsZUFBZSxFQUFFLE1BQU07U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtCQUFrQixDQUFDLE9BQVk7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELGFBQWEsQ0FBQyxVQUFrQjtRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO2tJQXZDVSxzQkFBc0I7c0lBQXRCLHNCQUFzQixjQUZyQixNQUFNOzs0RkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRG9jdW1lbnRTdGF0ZSB9IGZyb20gJy4vZG9jdW1lbnRSZWR1Y2VyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlZHVjZXJTZXJ2aWNlIHtcclxuICBpbml0aWFsU3RhdGU6IERvY3VtZW50U3RhdGUgPSB7XHJcbiAgICBkb2N1bWVudElkOiAnJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIHJlbG9hZFJlY2VudERvYzogZmFsc2UsXHJcbiAgICBtYXJnaW5zOiBbXSxcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGRvY3VtZW50U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RG9jdW1lbnRTdGF0ZT4oXHJcbiAgICB0aGlzLmluaXRpYWxTdGF0ZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgZ2V0RG9jdW1lbnRTdGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmRvY3VtZW50U3ViamVjdFxyXG4gICAgICAuYXNPYnNlcnZhYmxlKClcclxuICAgICAgLnBpcGVcclxuICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKSAvLyBFbnN1cmUgb25seSBkaXN0aW5jdCBzdGF0ZSBjaGFuZ2VzIGFyZSBlbWl0dGVkXHJcbiAgICAgICgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RG9jdW1lbnRUaXRsZSh0aXRsZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRvY3VtZW50U3ViamVjdC5uZXh0KHsgLi4udGhpcy5kb2N1bWVudFN1YmplY3QudmFsdWUsIHRpdGxlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVsb2FkUmVjZW50RG9jKHJlbG9hZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kb2N1bWVudFN1YmplY3QubmV4dCh7XHJcbiAgICAgIC4uLnRoaXMuZG9jdW1lbnRTdWJqZWN0LnZhbHVlLFxyXG4gICAgICByZWxvYWRSZWNlbnREb2M6IHJlbG9hZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0RG9jdW1lbnRNYXJnaW5zKG1hcmdpbnM6IGFueSkge1xyXG4gICAgdGhpcy5kb2N1bWVudFN1YmplY3QubmV4dCh7IC4uLnRoaXMuZG9jdW1lbnRTdWJqZWN0LnZhbHVlLCBtYXJnaW5zIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0RG9jdW1lbnRJZChkb2N1bWVudElkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZG9jdW1lbnRTdWJqZWN0Lm5leHQoeyAuLi50aGlzLmRvY3VtZW50U3ViamVjdC52YWx1ZSwgZG9jdW1lbnRJZCB9KTtcclxuICB9XHJcbn1cclxuIl19