---
sidebar_position: 2
---

# Quick Start

Let's explore the Document Editor in less than 5 minutes.

## Getting Started

To get started with the Document Editor, you'll need to initialize it in your project and specify the container element where the editor will be embedded.

- **Angular Component**

  ```typescript
  import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { DocumentEditorModule } from '@mindfiredigital/angular-canvas-editor';

  @Component({
    selector: 'app-root',
    imports: [DocumentEditorModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class AppComponent {
    title = 'angular-app';
  }
  ```

  ```html
  <DocumentEditor></DocumentEditor>
  ```

- **Web Component for React**

  ```javascript
  import '@mindfiredigital/angular-canvas-editor';
  import '@angular/compiler';

  export const App = () => <web-doc toolbar={toolBarItems}></web-doc>;
  ```

- **Web Component for JavaScript**

  ```javascript
  // In main.js file(i.e. used as a script in html file) add the following code
  import '@angular/compiler'; // Ensure this is installed
  import '@mindfiredigital/angular-canvas-editor';

  document.body.innerHTML += `<web-doc></web-doc>`;
  ```

:::info

Note that after importing '@mindfiredigital/angular-canvas-editor,' your project may experience a longer initial load time, but subsequent loads should be quicker.

:::

Please make sure that you import the library correctly, and your editor will function smoothly.
