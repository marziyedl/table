import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  private data = [
    { id: 1, name: '', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
  ];
  tableColumns: string[] = ['id', 'name', 'age'];
  tableDisplayColumns = ['customer id', 'Name', 'Age '];

  getData(page: number, pageSize: number) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = this.data.slice(startIndex, endIndex);

    return {
      data: paginatedData,
      totalItems: this.data.length,
      size: pageSize,
      pageNumber: page,
      tableColumns: this.tableColumns,
      tableDisplayColumns: this.tableDisplayColumns,
    };
  }
}
