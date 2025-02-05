import { Component, Input, OnInit } from '@angular/core';
import { DocumentReducerService } from '../util/document-reducer.service';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor';
import { CustomSliderVerticalComponent } from './custom-slider-vertical/custom-slider-vertical.component';
import { CustomSliderHorizontalComponent } from './custom-slider-horizontal/custom-slider-horizontal.component';
import { store } from '../util/store';
import useDebounce from '../util/useDebounce';

@Component({
  selector: 'lib-margin-ruler',
  standalone: true,
  imports: [CustomSliderVerticalComponent, CustomSliderHorizontalComponent],
  templateUrl: './margin-ruler.component.html',
  styleUrls: ['./margin-ruler.component.css'],
})
export class MarginRulerComponent implements OnInit {
  @Input() documentId!: string;
  verticalSlider: number[] = [];
  horizontalSlider: number[] = [];
  margins: any = [];

  constructor(private documentService: DocumentReducerService) {}

  ngOnInit(): void {
    if (!this.documentId) {
      console.error('Document ID is not provided.');
      return;
    }

    const documentState: any = store();

    if (!documentState || !documentState.margins) {
      console.error('Margins are not available in the document state.');
      return;
    }

    this.margins = useDebounce(documentState.margins, 500);

    if (this.margins.length) {
      this.verticalSlider = [-956, -100];
      this.horizontalSlider = [120, 696];

      if (!this.verticalSlider.length && !this.horizontalSlider.length) {
        DOMEventHandlers.setPaperMargins(this.margins);
      }
    }

    // this.documentService = new DocumentService();
  }

  handleChange(event: Event, value: number[]): void {
    const [bottom, top] = value;
    this.verticalSlider = value;

    const margin = [...this.margins];
    margin[0] = Math.abs(top);
    margin[1] = 1056 - Math.abs(bottom);

    DOMEventHandlers.setPaperMargins(margin);
    this.documentService.setDocumentMargins({ margins: margin });
  }

  handleChangeHorizontal(event: Event, value: number[]): void {
    const [left, right] = value;
    this.horizontalSlider = value;

    const margin = [...this.margins];
    margin[2] = left;
    margin[3] = 816 - right;

    DOMEventHandlers.setPaperMargins(margin);
    this.documentService.setDocumentMargins({ margins: margin });
  }
}
