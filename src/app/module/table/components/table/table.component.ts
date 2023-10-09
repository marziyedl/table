import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() displayNames: string[] = [];
  @Input() totalRows = 0;
  @Input() currentPageData: any[] | null = null;
  @Input() currentPage: number = 0;

  @Output() rowSelected = new EventEmitter<number[]>();
  @Output() pageChanged = new EventEmitter<{
    pageNumber: number;
    pageSize: number;
  }>();

  selectedRows: number[] = [];
  selectedAll = false;

  private _pageSize: number = 0;
  get pageSize(): number {
    return this._pageSize;
  }
  @Input() set pageSize(value: number) {
    if (this._pageSize !== value) {
      this._pageSize = value;
      this.pageChanged.emit({
        pageNumber: this.currentPage,
        pageSize: this._pageSize,
      });
    }
  }

  constructor() {}

  getObjectKeys(obj: any): string[] {
    return Object.values(obj);
  }

  toggleSelection(rowIndex: number) {
    const index = this.selectedRows.indexOf(rowIndex);

    if (index === -1) this.selectedRows.push(rowIndex);
    else this.selectedRows.splice(index, 1);

    this.emitSelectedRows();
  }

  selectAllRows(isChecked: boolean) {
    if (isChecked && this.currentPageData)
      this.selectedRows = Array.from(
        { length: this.currentPageData.length },
        (_, index) => index
      );
    else this.clearSelectedRows();

    this.emitSelectedRows();
  }

  emitSelectedRows() {
    this.rowSelected.emit(this.selectedRows);
  }

  isSelectedRow(index: number) {
    return this.selectedRows.includes(index);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged.emit({
        pageNumber: this.currentPage,
        pageSize: this._pageSize,
      });
    }
    this.clearSelectedRows();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChanged.emit({
        pageNumber: this.currentPage,
        pageSize: this._pageSize,
      });
    }
    this.clearSelectedRows();
  }

  clearSelectedRows() {
    this.selectedRows = [];
    this.selectedAll = false;
  }

  get totalPages() {
    return Math.ceil(this.totalRows / this.pageSize);
  }
}
