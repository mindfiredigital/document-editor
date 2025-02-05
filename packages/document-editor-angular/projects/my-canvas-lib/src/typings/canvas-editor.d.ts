
declare module '@mindfiredigital/canvas-editor' {
  // Enums
  export enum EditorMode {
    VIEW = 'view',
    EDIT = 'edit',
    // Add other modes as necessary
  }

  export enum PageMode {
    SINGLE = 'single',
    MULTI = 'multi',
    PAGING = ''
    // Add other modes as necessary
  }

  export enum RowFlex {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
    ALIGNMENT = "alignment"
  }


  export enum ListType {
    UL = "ul",
    OL = "ol"
  }

  export enum ListStyle {
    DISC = "disc",
    CIRCLE = "circle",
    SQUARE = "square",
    DECIMAL = "decimal"
  }
  export enum ElementType {
    TEXT = "text",
    IMAGE = "image",
    TABLE = "table",
    HYPERLINK = "hyperlink",
    SUPERSCRIPT = "superscript",
    SUBSCRIPT = "subscript",
    SEPARATOR = "separator",
    PAGE_BREAK = "pageBreak",
    CONTROL = "control",
    CHECKBOX = "checkbox",
    LATEX = "latex",
    TAB = "tab",
    DATE = "date",
    BLOCK = "block",
    TITLE = "title",
    LIST = "list"
  }

  // Interfaces
  export interface IElement {
    id: string;
    type: string;
    content: string;
    // Add other properties as necessary
  }

  export interface IRangeStyle {
    color: string;
    fontSize: number;
    // Add other properties as per your usage
  }
  export interface IEditorData {
    header?: IElement[];
    main: IElement[];
    footer?: IElement[];
}

export interface IEditorOption {
  mode?: EditorMode;
  defaultType?: string;
  defaultFont?: string;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  defaultBasicRowMarginHeight?: number;
  defaultRowMargin?: number;
  defaultTabWidth?: number;
  width?: number;
  height?: number;
  scale?: number;
  pageGap?: number;
  underlineColor?: string;
  strikeoutColor?: string;
  rangeColor?: string;
  rangeAlpha?: number;
  rangeMinWidth?: number;
  searchMatchColor?: string;
  searchNavigateMatchColor?: string;
  searchMatchAlpha?: number;
  highlightAlpha?: number;
  resizerColor?: string;
  resizerSize?: number;
  marginIndicatorSize?: number;
  marginIndicatorColor?: string;
  margins?: any;
  pageMode?: PageMode;
  tdPadding?: number;
  defaultTrMinHeight?: number;
  defaultColMinWidth?: number;
  defaultHyperlinkColor?: string;
  paperDirection?: any;
  inactiveAlpha?: number;
  historyMaxRecordCount?: number;
  printPixelRatio?: number;
  maskMargin?: any;
  wordBreak?: any;
  header?: any;
  footer?: any;
  pageNumber?: any;
  watermark?: any;
  control?: any;
  checkbox?: any;
  cursor?: any;
  title?: any;
  placeholder?: any;
}
  // DOMEventHandlers as a class with static methods
  export class DOMEventHandlers {
    static register(container: HTMLDivElement, data: IEditorData | IElement[], options?: IEditorOption): void;
    static setContent({ main: [{  }] }): void;
    static handleBold(): void;
    static handleItalic(): void;
    static handleUnderline(): void;
    static handleStrikeout(): void;
    static handleUndo(): void;
    static handleRedo(): void;
    static handleAlign(alignment: RowFlex): void;
    static handleList(type: ListType, style: ListStyle): void;
    static setFontColor(color: string): void;
    static setImage(image: { value: string; width: number; height: number }): void;
    static setPaperMargins(margins: any): void;
    static getSelectedText(): string;
    static getContentStyles(): any;
    // Add other static methods as per your usage
  }

  
}

declare module '@mindfiredigital/canvas-editor/dist/src/editor/interface/Listener' {
  export enum RowFlex {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
    ALIGNMENT = "alignment"
  }

  export enum ListType {
    UL = "ul",
    OL = "ol"
  }

  export enum ListStyle {
    DISC = "disc",
    CIRCLE = "circle",
    SQUARE = "square",
    DECIMAL = "decimal"
  }

  export  enum TitleLevel {
    FIRST = "first",
    SECOND = "second",
    THIRD = "third",
    FOURTH = "fourth",
    FIFTH = "fifth",
    SIXTH = "sixth"
}

  export interface IRangeStyle {

    undo: boolean;
    redo: boolean;
    painter: boolean;
    font: string;
    size: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikeout: boolean;
    color: string | null;
    highlight: string | null;
    rowFlex: RowFlex  ;
    rowMargin: number;
    dashArray: number[];
    TitleLevel: TitleLevel | null;
    ListType: ListType | null;
    ListStyle: ListStyle | null;
}
}
