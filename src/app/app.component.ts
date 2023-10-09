import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TableDataService } from './module/table/services/table-data.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly defaultPageSize = 2;
  private readonly defaultPageNumber = 1;

  pageNumber = this.defaultPageNumber;
  pageSize = this.defaultPageSize;
  totalRows = 0;
  tableColumns: string[] = [];
  data$ = new BehaviorSubject<any[]>([]);
  dataObservable$ = this.data$.asObservable();
  displayColumnsName: string[] = [];
  constructor(private tableDataService: TableDataService) {}

  ngOnInit() {
    this.loadData(this.pageNumber, this.pageSize);
  }

  loadData(pageNumber: number, pageSize: number) {
    const {
      data,
      totalItems,
      size,
      pageNumber: pageNum,
      tableColumns,
      tableDisplayColumns,
    } = this.tableDataService.getData(pageNumber, pageSize);
    this.totalRows = totalItems;
    this.data$.next(data);
    this.pageNumber = pageNum;
    this.pageSize = size;
    this.tableColumns = tableColumns;
    this.displayColumnsName = tableDisplayColumns;
  }

  handleRowSelected(selectedRowId: number[]) {
    console.log(`Row with ID ${selectedRowId} selected.`);
  }

  handlePageChanged({
    pageNumber,
    pageSize,
  }: {
    pageNumber: number;
    pageSize: number;
  }) {
    this.loadData(pageNumber, pageSize);
  }
}
