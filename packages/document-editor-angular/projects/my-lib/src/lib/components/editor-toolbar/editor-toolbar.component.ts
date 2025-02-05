import { Component, OnInit } from '@angular/core';
import {
  DOMEventHandlers,
  ListStyle,
  ListType,
  RowFlex,
} from '@mindfiredigital/canvas-editor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EmphasisComponent } from '../emphasis/emphasis.component';
@Component({
  selector: 'lib-editor-toolbar',
  standalone: true,
  imports: [

  ],
  templateUrl: './editor-toolbar.component.html',
  styleUrl: './editor-toolbar.component.css',
})
export class EditorToolbarComponent implements OnInit {
  contentStyles: any;
  alignment: string = RowFlex.LEFT;
  listType: string = '';
  formats: string[] = [];

  constructor() {}

  ngOnInit(): void {
    // let interval: any;
    // const timeout = setTimeout(() => {
    //   interval = setInterval(() => {
    //     const data = DOMEventHandlers.getContentStyles();
    //     this.contentStyles = data;
    //   }, 100);
    // }, 1000);
  }

  addFormat(format: string): void {
    let selectedFormats;
    if (this.formats.indexOf(format) === -1) {
      selectedFormats = [...this.formats, format];
    } else {
      selectedFormats = this.formats.filter((item) => item !== format);
    }
    this.formats = selectedFormats;
  }
}
