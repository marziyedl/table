import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { TablePaginationComponent } from '../table-pagination/table-pagination.component';
import { PageSizeDropDownComponent } from '../page-size-drop-down/page-size-drop-down.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        TablePaginationComponent,
        PageSizeDropDownComponent,
      ],
    });

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
  });

  it('should emit rowSelected event when toggleSelection is called', () => {
    const mockEvent = spyOn(component.rowSelected, 'emit');
    const rowIndex = 1;

    component.toggleSelection(rowIndex);

    expect(mockEvent).toHaveBeenCalledWith([rowIndex]);
  });

  it('should emit pageChanged event when pageSize is changed', () => {
    const mockEvent = spyOn(component.pageChanged, 'emit');
    const newPageSize = 10;

    component.pageSize = newPageSize;

    expect(mockEvent).toHaveBeenCalledWith({
      pageNumber: component.currentPage,
      pageSize: newPageSize,
    });
  });

  it('should decrement currentPage and emit pageChanged event when prevPage is called', () => {
    const mockEvent = spyOn(component.pageChanged, 'emit');
    component.currentPage = 2;

    component.prevPage();

    expect(component.currentPage).toEqual(1);
    expect(mockEvent).toHaveBeenCalledWith({
      pageNumber: component.currentPage,
      pageSize: component.pageSize,
    });
  });
});
