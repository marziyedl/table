import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TablePaginationComponent],
  exports: [TablePaginationComponent],
  imports: [CommonModule, FormsModule],
})
export class TableModule {}
