import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RowFlex } from '@mindfiredigital/canvas-editor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EmphasisComponent } from '../emphasis/emphasis.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'lib-editor-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    EmphasisComponent,
    CommonModule,
  ],
  templateUrl: './editor-toolbar.component.html',
  styleUrl: './editor-toolbar.component.css',
})
export class EditorToolbarComponent implements OnInit {
  contentStyles: any;
  alignment: string = RowFlex.LEFT;
  listType: string = '';
  formats: string[] = [];

  @Input() toolbarItem: any;
  @Input() toolbarClass: any;
  @Output() change = new EventEmitter<string>();
  @Output() select = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.toolbarItem = {
        bold: true,
        italic: true,
        underline: true,
        image: true,
        undo: true,
        redo: true,
        leftAlign: true,
        centerAlign: true,
        rightAlign: true,
        justify: true,
        orderedList: true,
        unorderedList: true,
        hyperlink: true,
        subscript: true,
        superscript: true,
        strikethrough: true,
        fontType: true,
        fontColor: true,
        heading: true,
        table: true,
        highlight: true,
        fontSize: true,
      };
    }, 500);
    // let interval: any;
    // const timeout = setTimeout(() => {
    //   interval = setInterval(() => {
    //     const data = DOMEventHandlers.getContentStyles();
    //     this.contentStyles = data;
    //   }, 100);
    // }, 1000);
  }

  onChange(action: string) {
    console.log('Toolbar Component:', action);
    this.change.emit(action);
  }

  onSelect(action: string) {
    console.log('Toolbar Component:', action);
    this.select.emit(action);
  }

  addFormat(format: string): void {
    let selectedFormats;
    if (this.formats.indexOf(format) === -1) {
      selectedFormats = [...this.formats, format];
    } else {
      selectedFormats = this.formats.filter(item => item !== format);
    }
    this.formats = selectedFormats;
  }
}
