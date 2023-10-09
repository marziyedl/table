import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
})
export class TablePaginationComponent {
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  goOnPrevPage() {
    if (this.currentPage > 1) this.prev.emit();
  }

  goOnNextPage() {
    if (this.currentPage < this.totalPages) this.next.emit();
  }
}
