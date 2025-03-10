import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DocumentEditorComponent } from './document-editor.component';

@NgModule({
  imports: [CommonModule, FormsModule, DocumentEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DocumentEditorComponent],
})
export class DocumentEditorWebComponentModule {
  constructor(private injector: Injector) {
    if (!customElements.get('web-doc')) {
      const WebDocElement = createCustomElement(DocumentEditorComponent, {
        injector,
      });
      customElements.define('web-doc', WebDocElement);
    }
  }

  ngDoBootstrap() {}
}
