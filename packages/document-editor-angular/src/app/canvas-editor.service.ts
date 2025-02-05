// import { Injectable, OnDestroy } from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })
// export class CanvasEditorService implements OnDestroy {
//   private editorInstance: any;

//   constructor() { }

//   initializeCanvasEditor(element: HTMLElement): void {
//     this.editorInstance = new CanvasEditor(element);
//     // Initialize any other configurations if needed
//   }

//   getEditorInstance() {
//     return this.editorInstance;
//   }

//   handleBold() {
//     DOMEventHandlers.handleBold();
//   }

//   handleItalic() {
//     DOMEventHandlers.handleItalic();
//   }

//   // Implement other methods similarly based on the handlers provided
//   // e.g. handleUnderline(), handleUndo(), handleRedo(), etc.

//   ngOnDestroy(): void {
//     if (this.editorInstance) {
//       // Clean up if the library provides a destroy method
//       this.editorInstance.destroy();
//     }
//   }
// }