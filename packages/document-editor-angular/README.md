# @mindfiredigital/angular-canvas-editor

Experience powerful document creation with our Angular-based editor. Craft and manage multi-page documents effortlessly.

The `@mindfiredigital/angular-canvas-editor` is a tool that allows developers to integrate multi-page document editors built on top of Canvas using Angular.

## Table of Contents
- [Why Canvas Over HTML Editor](#why-canvas-over-html-editor)
- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Why Canvas Over HTML Editor
The canvas element in HTML serves as a versatile space for drawing graphics using JavaScript, enabling the creation of dynamic, interactive, and visually engaging content on web pages. Within this context, a Canvas editor emerges as a powerful tool or application that harnesses the capabilities of the canvas element. This editor facilitates the creation, editing, and manipulation of graphics or drawings directly within a web browser.

- **Fine-Grained Control**: Total freedom to manipulate pixels, dictate rendering, and create custom elements and interactivity beyond what HTML offers out of the box.

- **Scalable Performance**: Blazing fast rendering and lightweight data synchronization fueled by the raw power of canvas APIs rather than heavy HTML DOM reconciliation.

- **Easy Multiplayer Integration**: Canvas state using simple coordinate vectors flows seamlessly cross-device enabling effortless real-time collaborative editing at scale.

- **Unleashed Creativity**: No limits enforced by page markup frees imagination to run wild. Build beyond editor chrome right on the infinite canvas with total creative liberty.

- **Future-Facing Setup**: Canvas as a technology continues rapid innovation, unlike stale HTML editors. What’s created today on canvas can easily harness tomorrow’s new features.

- **Skill Transferability**: Canvas skills open doors across cutting-edge domains like metaverse experiences, game development, 3D, generative art, and other growth areas.

To know more, you can check the link [Canvas vs HTML Editor](#).

## Features
- **Undo**: Reverse the most recent action you performed. Useful for correcting mistakes by going back one step.
- **Redo**: Reapply an action that you've previously undone.
- **Bold**: Make selected text appear thicker and more prominent.
- **Italic**: Slant text to the right.
- **Underline**: Place a horizontal line beneath text.
- **Subscript**: Lower the selected text below the baseline.
- **Superscript**: Raise the selected text above the baseline.
- **Strikethrough**: Indicate that the content should be deleted or is no longer valid by drawing a line through it.
- **Left Align**: Align text to the left margin, creating a straight left edge.
- **Center Align**: Place text in the middle of the page or text box.
- **Right Align**: Align text to the right margin, creating a straight right edge.
- **Justify**: Spread text evenly between both the left and right margins for a clean appearance on both sides.
- **Bullet List**: Present information as a series of items with bullets.
- **Numbered List**: Provide a sequential order to items.
- **Font Type**: Choose specific styles of text characters, such as Arial, Times New Roman, and Calibri.
- **Insert Table**: Create tables to organize data.
- **Text Color**: Change the color of the text.
- **Highlight Color**: Add a background color to text.
- **Font Size**: Control the size of the text characters.
- **Heading**: Divide a document into sections or chapters, typically styled with larger text or bold formatting.
- **Hyperlink**: Create clickable links that connect to webpages or other locations within the document.
- **Image**: Insert images or graphics to enhance visual appeal or convey additional information.
- **Customizable UI**: Easily customize the document editor's user interface to match your application's branding.

## Installation
To install the `@mindfiredigital/angular-canvas-editor` npm package in your project, use the following command:

```bash
npm install @mindfiredigital/angular-canvas-editor

```bash
Getting Started
Import the Module
In your application's main module (app.module.ts), import the MyCanvasLibModule:

typescript
Copy code
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyCanvasModule } from '@mindfiredigital/angular-canvas-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyCanvasLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
Use the Editor in a Component
Use the lib-my-lib template to integrate the editor into your component. For example, in app.component.html:


<lib-my-lib></lib-my-lib>
Configure as Needed
Customize the editor according to your application's requirements by referring to the documentation.