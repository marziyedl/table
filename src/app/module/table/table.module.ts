import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { PageSizeDropDownComponent } from './components/page-size-drop-down/page-size-drop-down.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TablePaginationComponent, PageSizeDropDownComponent],
  exports: [TablePaginationComponent, PageSizeDropDownComponent],
  imports: [CommonModule, FormsModule],
})
export class TableModule {}
