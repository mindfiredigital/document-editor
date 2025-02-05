import { ElementType, ListStyle, ListType, RowFlex } from "@mindfiredigital/canvas-editor";


declare module '@mindfiredigital/canvas-editor/dist/src/editor/interface/Listener' {
  
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
      RowFlex: RowFlex | null ;
      rowMargin: number;
      dashArray: number[];
      TitleLevel: TitleLevel | null;
      ListType: ListType | null;
      ListStyle: ListStyle | null;
  }
  }