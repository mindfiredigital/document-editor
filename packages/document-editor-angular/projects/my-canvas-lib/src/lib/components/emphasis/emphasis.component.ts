import {
  Component,
  Input,
  Output,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ImageUploadButtonComponent } from '../image-upload-button/image-upload-button.component';
import {
  DOMEventHandlers,
  RowFlex,
  ListType,
  ListStyle,
} from '@mindfiredigital/canvas-editor';
import { IRangeStyle } from '@mindfiredigital/canvas-editor/dist/src/editor/interface/Listener';
import {
  faUndo,
  faRedo,
  faBold,
  faItalic,
  faUnderline,
  faImage,
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faLink,
  faListOl,
  faListUl,
  faStrikethrough,
  faSubscript,
  faSuperscript,
} from '@fortawesome/free-solid-svg-icons';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ButtonWrapperComponent } from '../button-wrapper/button-wrapper.component';
import { MatIconModule } from '@angular/material/icon';
import { ColorPaletteComponent } from '../color-palette/color-palette.component';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import { HeadingDropdownButtonComponent } from '../heading-dropdown/heading-dropdown-button';
import { FontSizeButtonComponent } from '../font-size/font-size.component';
import { HighlightTextButtonComponent } from '../highlight-text/highlight-text.component';
import { TableDropdownComponent } from '../table/table-dropdown.component';
import { FontDropdownComponent } from '../dropdown/font-dropdown.component';
import { FontColorButtonComponent } from '../font-color-button/font-color-button.component';
@Component({
  selector: 'lib-emphasis',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    MatButtonToggleModule,
    ImageUploadButtonComponent,
    FontAwesomeModule,
    CommonModule,
    ButtonWrapperComponent,
    MatIconModule,
    ColorPaletteComponent,
    ColorPickerComponent,
    HeadingDropdownButtonComponent,
    HighlightTextButtonComponent,
    FontSizeButtonComponent,
    TableDropdownComponent,
    FontDropdownComponent,
    FontColorButtonComponent,
  ],
  templateUrl: './emphasis.component.html',
  styleUrls: ['./emphasis.component.css'],
})
export class EmphasisComponent implements OnInit, OnDestroy {
  @Input() toolbar: any;
  @Input() toolbarClass: any;

  @Output() change = new EventEmitter<any>();
  @Output() select = new EventEmitter<string>();

  faUndo = faUndo;
  faRedo = faRedo;
  faBold = faBold;
  faItalic = faItalic;
  faUnderline = faUnderline;
  faImage = faImage;
  faAlignLeft = faAlignLeft;
  faAlignCenter = faAlignCenter;
  faAlignRight = faAlignRight;
  faAlignJustify = faAlignJustify;
  faLink = faLink;
  faListOl = faListOl;
  faListUl = faListUl;
  faSuperscript = faSuperscript;
  faSubscript = faSubscript;
  faStrikethrough = faStrikethrough;
  contentStyles: IRangeStyle | undefined;
  alignment: RowFlex = RowFlex.LEFT;
  listType: string = '';
  formats: string[] = [];
  RowFlex = RowFlex;
  private interval: any;
  isUndoActive = false;
  isRedoActive = false;
  selectedFontColor: string = '#000000';
  selectedHighlightColor: string = '#FFFF00';
  isOrderedList = false;
  isUnorderedList = false;
  isImageSelected = false;
  isHyperlinkActive = false;
  get selectedItemStyle() {
    return {
      color:
        this.toolbarClass?.item?.selectedToolbarItemColor?.color !== undefined
          ? this.toolbarClass.item.selectedToolbarItemColor.color
          : '#1a73e8',
    };
  }
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faAlignLeft,
      faAlignCenter,
      faAlignRight,
      faAlignJustify,
      faLink
    );
  }

  ngOnInit(): void {
    console.log(this.toolbarClass);
    this.toolbar = {};
    this.interval = setInterval(() => {
      const data = DOMEventHandlers.getContentStyles();
      this.contentStyles = data;
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  toggleFormat(format: string): void {
    if (!this.formats.includes(format)) {
      this.formats.push(format);
    } else {
      this.formats = this.formats.filter(f => f !== format);
    }

    switch (format) {
      case 'Bold':
        DOMEventHandlers.handleBold();
        this.change.emit({ type: 'bold' });
        break;
      case 'Italic':
        DOMEventHandlers.handleItalic();
        this.change.emit({ type: 'italic' });
        break;
      case 'Underline':
        DOMEventHandlers.handleUnderline();
        this.change.emit({ type: 'underline' });
        break;
      case 'Strikethrough':
        DOMEventHandlers.handleStrikeout();
        this.change.emit({ type: 'strikethrough' });
        break;
      case 'Subscript':
        DOMEventHandlers.handleSubscript();
        this.change.emit({ type: 'subscript' });
        break;
      case 'Superscript':
        DOMEventHandlers.handleSuperscript();
        this.change.emit({ type: 'superscript' });
        break;
    }
  }

  handleUndo(): void {
    DOMEventHandlers.handleUndo();
    this.isUndoActive = true;
    this.change.emit({ type: 'undo' });
  }

  handleRedo(): void {
    DOMEventHandlers.handleRedo();
    this.isRedoActive = true;
    this.change.emit({ type: 'redo' });
  }

  handleAlignment(alignment: any): void {
    DOMEventHandlers.handleAlign(alignment);
    this.alignment = alignment;
    this.change.emit({ type: 'alignment', alignment });
  }

  toggleList(type: 'ordered' | 'unordered'): void {
    if (type === 'ordered') {
      this.isOrderedList = !this.isOrderedList;
      this.isUnorderedList = false;
      DOMEventHandlers.handleList(ListType.OL, ListStyle.DECIMAL);
    } else {
      this.isUnorderedList = !this.isUnorderedList;
      this.isOrderedList = false;
      DOMEventHandlers.handleList(ListType.UL, ListStyle.DECIMAL);
    }
    this.change.emit({ type: 'list', listType: type });
  }

  setTextColor(event: Event): void {
    const color = (event.target as HTMLInputElement).value;
    this.selectedFontColor = color;
    DOMEventHandlers.setFontColor(color);
    this.change.emit({ type: 'textColor', color });
  }

  handleTextSelection(): void {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      this.select.emit(selectedText);
    }
  }

  onImageSelected(event: {
    base64: string;
    width: number;
    height: number;
  }): void {
    if (event && event.base64) {
      this.isImageSelected = true;
      DOMEventHandlers.setImage({
        value: event.base64,
        height: event.height,
        width: event.width,
      });
      this.change.emit({ type: 'image', image: event.base64 });
    }
  }

  createHyperlink(): void {
    const url = prompt('Enter URL:');
    if (url) {
      this.isHyperlinkActive = true;
      DOMEventHandlers.createHyperLink();
      this.change.emit({ type: 'hyperlink', url });
    }
  }
}
