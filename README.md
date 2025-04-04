<h1 align="center">Document Editor </h1><br><br>
<p align="center">
<a href="https://www.npmjs.com/package/@mindfiredigital/react-canvas-editor"><img src="https://img.shields.io/npm/v/@mindfiredigital/react-canvas-editor.svg?sanitize=true" alt="React Version"></a>
<a href="https://www.npmjs.com/package/@mindfiredigital/angular-canvas-editor"><img src="https://img.shields.io/npm/v/@mindfiredigital/angular-canvas-editor.svg?sanitize=true" alt="Angular Version"></a>
<a href="https://github.com/mindfiredigital/document-editor"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
</p>

<br>

<p align="center">
  <strong>Experience seamless and powerful document creation</strong> with our advanced HTML5 Canvas-based Document Editor. Effortlessly craft, edit, and manage multi-page documents with precision and flexibility.
</p>

This tool empowers developers to easily integrate a fully customizable, multi-page document editor into their web applications — all built on the robust and scalable foundation of HTML5 Canvas.

<br>

## Table of Content

- [Why canvas over HTML Editor](#why-canvas-over-html-editor)
- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

<br>

# Why canvas over HTML Editor

The canvas element in HTML serves as a versatile space for drawing graphics using JavaScript, enabling the creation of dynamic, interactive, and visually engaging content on web pages. Within this context, a Canvas editor emerges as a powerful tool or application that harnesses the capabilities of the canvas element. This editor facilitates the creation, editing, and manipulation of graphics or drawings directly within a web browser.

- **Fine-Grained Control**: Fine-Grained Control: Total freedom to manipulate pixels, dictate rendering, and create custom elements and interactivity beyond what HTML offers out of the box.

- **Scalable Performance**: Blazing fast rendering and lightweight data synchronization fueled by the raw power of canvas APIs rather than heavy HTML DOM reconciliation.

- **Easy Multiplayer Integration**: Canvas state using simple coordinate vectors flows seamlessly cross-device enabling effortless real-time collaborative editing at scale.

- **Unleashed Creativity**: No limits enforced by page markup frees imagination to run wild. Build beyond editor chrome right on the infinite canvas with total creative liberty.

- **Future Facing Setup**: Canvas as a technology continues rapid innovation, unlike stale HTML editors. What’s created today on canvas can easily harness tomorrow’s new features.

- **Skill Transferability**: Canvas skills open doors across cutting edge domains like metaverse experiences, game dev, 3D, generative art, and other growth areas.

To know more you can check the link
[Canvas vs HTML Editor](https://mindfiredigital.github.io/react-canvas-editor/docs/Why-we-use-canvas/)

<br>

## Features

- **Undo**: This feature allows you to reverse the most recent action you performed. It's particularly useful when you make a mistake and want to go back one step.
- **Redo**: Redo is the opposite of undo. It allows you to reapply an action that you've previously undone.
- **Bold**: When you apply bold formatting to text, it makes the selected text appear thicker and more prominent.
- **Italic**: Italic text is slanted to the right.
- **Underline**: Underlining text places a horizontal line beneath it.
- **Subscript**: Subscript lowers the selected text below the baseline.
- **Superscript**: Superscript raises the selected text above the baseline.
- **Strikethrough**: Text with a strikethrough line through it is used to indicate that the content should be deleted or is no longer valid.
- **Left Align**: This feature aligns text to the left margin, creating a straight left edge.
- **Center Align**: Center alignment places text in the middle of the page or text box.
- **Right Align**: Text is aligned to the right margin, creating a straight right edge.
- **Justify**: Justification spreads text evenly between both the left and right margins, creating a clean and straight appearance on both sides.
- **Bullet List**: Bullet lists present information as a series of items with bullets.
- **Numbered List**: Numbered lists provide a sequential order to items.
- **Font Type**: Font type refers to the specific style of text characters. Examples include Arial, Times New Roman, and Calibri.
- **Insert Table**: This feature allows you to create tables to organize data.
- **Text Color**: Text color lets you change the color of the text.
- **Highlight Color**: Highlighting text adds a background color.
- **Font Size**: Font size controls the size of the text characters.
- **Heading**: Headings are typically used to divide a document into sections or chapters. They are usually styled differently, such as with larger text or bold formatting.
- **Hyperlink**: A hyperlink is a clickable link that connects to a webpage or another location within the document.
- **Image**: This feature allows you to insert images or graphics into your document to enhance its visual appeal or convey additional information.
- **Customizable UI**: Easily customize the document editor's user interface to match your application's branding.

<br>

## Canvas Editor Installation

### 👉 For **React** Projects:

```bash
npm install @mindfiredigital/react-canvas-editor
```

### 👉 For **Angular** Projects:

```bash
npm install @mindfiredigital/angular-canvas-editor
```

<br>

## Getting Started

- **Initialization**: Initialize the canvas document editor in your project, specifying the container element where the editor will be embedded.

<table>
  <tr>
    <th>React Component</th>
    <th>Web Component for React</th>
    <th>Web Component for JavaScript</th>
    <th>Angular Component</th>
  </tr>
  <tr>
  <td>

```javascript
import { DocumentEditor } from "@mindfiredigital/react-canvas-editor";
import React from "react";

export const App = () => {
  const toolbarItem: any = {
    bold: true,
    italic: true,
    underline: true,
    undo: true,
    redo: true,
    image: true,
  };

  const handleChange = (data) => {
    console.log("test ->", data);
  };

  const handleSelectedText = (text) => {
    console.log(text);
  };

  return (
    <DocumentEditor
      toolbar={toolbarItem}
      on_change={handleChange}
      on_select={handleSelectedText}
      value='Hello world'
    />
  );
};
```

  </td>
  <td>

```javascript
import { DocumentEditorWebComponent } from "@mindfiredigital/react-canvas-editor";

const toolbarItem: any = {
  bold: true,
  italic: true,
  underline: true,
  undo: true,
  redo: true,
  image: true,
};

const handleChange = (data) => {
  console.log("test ->", data);
};

const handleSelectedText = (text) => {
  console.log(text);
};

const props = {
  toolbar:toolbarItem
  on_change:handleChange
  on_select:handleSelectedText
  value:'Hello world'
};

DocumentEditorWebComponent(props);

export const App = () => <div id='document-editor'></div>;
```

  </td>
  <td>

```html
<!-- In you html file add following code in a body tag where you want to use react canvas editor -->
<body>
  <div id="document-editor"></div>
  <script type="module" src="/main.js"></script>
</body>
;
```

```javascript
// In main.js file(i.e. used as a script in html file) add the following code
import { DocumentEditorWebComponent } from "@mindfiredigital/react-canvas-editor";

const toolbarItem = {
  bold: true,
  italic: true,
  underline: true,
  undo: true,
  redo: true,
  image: true,
};

function handleChange(data) {
  console.log(`test1 -> ${data}`);
}

function handleSelectedText(text) {
  console.log(`select1 ->, ${text}`);
}

DocumentEditorWebComponent({
  toolbar:toolbarItem
  on_change:handleChange
  on_select:handleSelectedText
  value:'Hello world'
});
```

  </td>
  <td>

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentEditorModule } from '@mindfiredigital/angular-canvas-editor';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DocumentEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <document-editor
      [toolbar]="toolbarItem"
      (onChange)="handleChange($event)"
      (onSelect)="handleSelectedText($event)"
      [value]="'Hello world'"
    ></document-editor>
  `,
})
export class AppComponent {
  toolbarItem = {
    bold: true,
    italic: true,
    underline: true,
    undo: true,
    redo: true,
    image: true,
  };

  handleChange(data: any) {
    console.log('test ->', data);
  }

  handleSelectedText(text: string) {
    console.log(text);
  }
}
```

  </td>
  </tr>
</table>
<br>

- **Customization**: Customize the editor's UI and behavior to match your application's requirements.

<table>
  <tr>
    <th>React Component</th>
    <th>Web Component for React</th>
    <th>Web Component for JavaScript</th>
    <th>Angular Component</th>
  </tr>
  <tr>
  <td>

```javascript
import { DocumentEditor } from "@mindfiredigital/react-canvas-editor";
import React from "react";

export const App = () => {
  const toolbarClass: any = {
    container: {
      // backgroundColor: "red"
    },
    primaryToolbar: {
      justifyContent: "center",
    },
    item: {
      undo: {
        // border: 'red solid 2px',
        // background:'yellow'
      },
      redo: {
        // border: 'black solid 3px',
        // background:'blue'
      },
      bold: {
        // border: 'black solid 3px',
        // background:'blue'
      },
      italic: {
        // border: 'black solid 3px',
        // background:'blue'
      },
      underline: {
        // border: 'black solid 3px',
        // background:'blue'
      },
      image: {
        // border: 'black solid 3px',
        // background:'blue'
      },
      fontType: {
        // background:'green'
      },
      table: {
        // background:'green'
      },
      fontColor: {
        // background:'green'
      },
      highlight: {
        // background:'green'
      },
      fontSize: {
        // background:'green'
      },
      heading: {
        // background:'green'
      },
      selectedToolbarItemColor: {
        // color: "#1a73e8",
      },
    },
  };

  const canvasClass = {
    editorMain: {
      // background:'antiquewhite'
    },
    margin: {},
  };

  return (
    <DocumentEditor toolbar_class={toolbarClass} canvas_class={canvasClass} />
  );
};
```

  </td>
  <td>

```javascript
import { DocumentEditorWebComponent } from "@mindfiredigital/react-canvas-editor";

const toolbarClass: any = {
  container: {
    // backgroundColor: "red"
  },
  primaryToolbar: {
    justifyContent: "center",
  },
  item: {
    undo: {
      // border: 'red solid 2px',
      // background:'yellow'
    },
    redo: {
      // border: 'black solid 3px',
      // background:'blue'
    },
    bold: {
      // border: 'black solid 3px',
      // background:'blue'
    },
    italic: {
      // border: 'black solid 3px',
      // background:'blue'
    },
    underline: {
      // border: 'black solid 3px',
      // background:'blue'
    },
    image: {
      // border: 'black solid 3px',
      // background:'blue'
    },
    fontType: {
      // background:'green'
    },
    table: {
      // background:'green'
    },
    fontColor: {
      // background:'green'
    },
    highlight: {
      // background:'green'
    },
    fontSize: {
      // background:'green'
    },
    heading: {
      // background:'green'
    },
    selectedToolbarItemColor: {
      // color: "#1a73e8",
    },
  },
};

const canvasClass = {
  editorMain: {
    // background:'antiquewhite'
  },
  margin: {},
};

const props = {
  toolbar_class: toolbarClass,
  canvas_class: canvasClass,
};

DocumentEditorWebComponent(props);

export const App = () => <div id='document-editor'></div>;
```

  </td>
  <td>

```html
<!-- In you html file add following code in a body tag where you want to use react canvas editor -->
<body>
  <div id="document-editor"></div>
  <script type="module" src="/main.js"></script>
</body>
;
```

```javascript
// In main.js file(i.e. used as a script in html file) add the following code
import { DocumentEditorWebComponent } from "@mindfiredigital/react-canvas-editor";

const toolbarClass: any = {
  container: {
    // backgroundColor: "red"
  },
  primaryToolbar: {
    justifyContent: "center",
  },
  item: {
    undo: {
      // border: 'red solid 2px',
      // background:'yellow'
    },
    redo: {
      // border: 'black solid 3px',
      // background:'blue'
    },
    bold: {
      // border: 'black solid 3px',
      // background:'blue'
    },
    italic: {
      // border: 'black solid 3px',
      // background:'blue'
    },
    underline: {
      // border: 'black solid 3px',
      // background:'blue'
    },
    image: {
      // border: 'black solid 3px',
      // background:'blue'
    },
    fontType: {
      // background:'green'
    },
    table: {
      // background:'green'
    },
    fontColor: {
      // background:'green'
    },
    highlight: {
      // background:'green'
    },
    fontSize: {
      // background:'green'
    },
    heading: {
      // background:'green'
    },
    selectedToolbarItemColor: {
      // color: "#1a73e8",
    },
  },
};

const canvasClass = {
  editorMain: {
    // background:'antiquewhite'
  },
  margin: {},
};

DocumentEditorWebComponent({
  toolbar_class: toolbarClass,
  canvas_class: canvasClass,
});
```

  </td>
  <td>

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <document-editor
      [toolbar_class]="toolbarClass"
      [canvas_class]="canvasClass"
    ></document-editor>
  `,
})
export class AppComponent {
  toolbarClass = {
    container: {
      // backgroundColor: "red"
    },
    primaryToolbar: {
      justifyContent: 'center',
    },
    item: {
      undo: {
        // border: 'red solid 2px',
        // background:'yellow'
      },
      redo: {
        // border: 'black solid 3px',
        // background:'blue'
      },
      bold: {
        // border: 'black solid 3px',
        // background:'blue'
      },
      italic: {
        // border: 'black solid 3px',
        // background:'blue'
      },
      underline: {
        // border: 'black solid 3px',
        // background:'blue'
      },
      image: {
        // border: 'black solid 3px',
        // background:'blue'
      },
      fontType: {
        // background:'green'
      },
      table: {
        // background:'green'
      },
      fontColor: {
        // background:'green'
      },
      highlight: {
        // background:'green'
      },
      fontSize: {
        // background:'green'
      },
      heading: {
        // background:'green'
      },
      selectedToolbarItemColor: {
        // color: "#1a73e8",
      },
    },
  };

  canvasClass = {
    editorMain: {
      // background:'antiquewhite'
    },
    margin: {},
  };
}
```

  </td>
  </tr>
</table>

<br>

- **DOM handlers**:
  - **on_change**: The onchange event occurs when the value is changed.
  - **on_select**: The onSelect event occurs when the value is selected.
  - **value**: The value attribute on an tag sets the value of the page.

<br>

## Demo

[React Canvas Editor](https://canvas-editor-htfx.vercel.app/)

[Angular Canvas Editor](https://canvas-editor-htfx.vercel.app/)

## Contributing

We welcome contributions from the community. If you'd like to contribute to the `react-document-editor` npm package, please follow our [Contributing Guidelines](CONTRIBUTING.md).
<br>

## License

Copyright (c) Mindfire Digital llp. All rights reserved.

Licensed under the MIT license.
