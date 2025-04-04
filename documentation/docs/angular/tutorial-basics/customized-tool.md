---
sidebar_position: 1
---

# How to customize toolbar

Customizing the user interface and actions of the editor to align with your application's requirements is essential.

## Customize toolbar

The toolbar offers the flexibility to add or remove various tools to suit your specific needs. By default, all tools in the toolbar options are displayed.

## Adding or Removing Tools

To customize the toolbar, you can create an object with the following structure:

```typescript
toolbarItem = {
  bold: true,
  italic: true,
  underline: true,
  undo: true,
  redo: true,
  image: false,
};
```

- To add a tool, set its value to true.
- To remove a tool, set its value to false.

Here's an example of how to implement this in your code:

- **Angular Component**

  ```typescript
  import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { DocumentEditorModule } from '@mindfiredigital/angular-canvas-editor';

  @Component({
    selector: 'app-root',
    imports: [RouterOutlet, DocumentEditorModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class AppComponent {
    title = 'angular-app';
    toolBarItems = {
      bold: true,
      italic: true,
      underline: true,
      image: false,
      undo: true,
      redo: true,
    };
  }
  ```

- **Web Component for React**
- For web components we need to install and import @angular/compiler

  ```javascript
  import '@angular/compiler';
  import '@mindfiredigital/angular-canvas-editor';

  // Define toolbar items
  toolBarItems = {
    bold: true,
    italic: true,
    underline: true,
    image: false,
    undo: true,
    redo: true,
  };

  // Angular component using the web component
  export const App = () => <web-doc toolbar={toolBarItems}></web-doc>;
  ```

- **Web Component for JavaScript**

  ```javascript
  // In main.js file(i.e. used as a script in html file) add the following code
  import "@angular/compiler"; // Ensure this is installed
  import  "@mindfiredigital/angular-canvas-editor";



  toolBarItems = {
      "bold": true,
      "italic": true,
      "underline": true,
      "image": false,
      "undo": true,
      "redo": true
    }


  document.body.innerHTML += `<web-doc  toolbar='${JSON.stringify(toolBarItems)}' ></web-doc>`;`
  ```
