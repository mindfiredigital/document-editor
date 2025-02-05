import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor'; // Import the library

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private marginsSource = new BehaviorSubject<number[]>([100, 956, 120, 696]);
  margins$ = this.marginsSource.asObservable();

  // Get margins for a specific document
  getPaperMargins(): number[] {
    return this.marginsSource.value;
  }

  // Set margins using the external DOMEventHandlers.setPaperMargins function
  setPaperMargins(margins: number[]): void {
    DOMEventHandlers.setPaperMargins(margins); 
    this.marginsSource.next(margins);
  }
}
