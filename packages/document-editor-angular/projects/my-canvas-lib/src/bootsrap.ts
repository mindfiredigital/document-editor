import 'zone.js';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { DocumentEditorComponent } from './lib/pages/document-editor.component';
import { provideStore } from '@ngrx/store';
import { documentReducer } from './lib/store/document.reducer';
import { provideAnimations } from '@angular/platform-browser/animations';

(async () => {
  const app = await createApplication({
    providers: [provideStore(documentReducer), provideAnimations()],
  });

  const webDocElement = createCustomElement(DocumentEditorComponent, {
    injector: app.injector,
  });

  customElements.define('web-doc', webDocElement); // ✅ Define as <web-doc>
})();
