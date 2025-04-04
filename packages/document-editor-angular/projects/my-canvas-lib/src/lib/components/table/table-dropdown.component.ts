import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { DOMEventHandlers } from '@mindfiredigital/canvas-editor';

@Component({
  selector: 'app-table-dropdown',
  templateUrl: './table-dropdown.component.html',
  styleUrls: ['./table-dropdown.component.css'],
  imports: [MatIconModule, CommonModule, FontAwesomeModule],
})
export class TableDropdownComponent {
  @Input() style?: any;

  colIndex: number = -1;
  rowIndex: number = -1;
  tablePanelVisible: boolean = false;
  tableTitle: string = 'Insert table';
  faTable = faTable;
  handleTableClick(): void {
    this.tablePanelVisible = true;
  }

  handleTableCellHover(event: MouseEvent): void {
    const celSize = 16;
    const rowMarginTop = 4;
    const celMarginRight = 6;

    const offsetX = (event as any).offsetX;
    const offsetY = (event as any).offsetY;

    this.colIndex = Math.ceil(offsetX / (celSize + celMarginRight)) || 1;
    this.rowIndex = Math.ceil(offsetY / (celSize + rowMarginTop)) || 1;
    this.tableTitle = `${this.rowIndex}×${this.colIndex}`;
  }

  handleCloseTable(): void {
    this.tablePanelVisible = false;
    this.colIndex = -1;
    this.rowIndex = -1;
    this.tableTitle = 'Insert table';
  }

  handleApplyTable(): void {
    DOMEventHandlers.createTable({
      rowIndex: this.rowIndex,
      colIndex: this.colIndex,
    });
    this.handleCloseTable();
  }
}
