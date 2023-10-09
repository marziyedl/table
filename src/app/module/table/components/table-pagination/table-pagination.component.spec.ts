import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablePaginationComponent } from './table-pagination.component';

describe('TablePaginationComponent', () => {
  let component: TablePaginationComponent;
  let fixture: ComponentFixture<TablePaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePaginationComponent],
    });

    fixture = TestBed.createComponent(TablePaginationComponent);
    component = fixture.componentInstance;
  });

  it('should emit prev event when prevPage is called and currentPage > 1', () => {
    const mockEvent = spyOn(component.prev, 'emit');
    component.currentPage = 2;

    component.goOnPrevPage();

    expect(mockEvent).toHaveBeenCalled();
  });

  it('should not emit prev event when prevPage is called and currentPage is 1', () => {
    const mockEvent = spyOn(component.prev, 'emit');
    component.currentPage = 1;

    component.goOnPrevPage();

    expect(mockEvent).not.toHaveBeenCalled();
  });

  it('should emit next event when nextPage is called and currentPage < totalPages', () => {
    const mockEvent = spyOn(component.next, 'emit');
    component.currentPage = 2;
    component.totalPages = 3;

    component.goOnNextPage();

    expect(mockEvent).toHaveBeenCalled();
  });

  it('should not emit next event when nextPage is called and currentPage >= totalPages', () => {
    const mockEvent = spyOn(component.next, 'emit');
    component.currentPage = 3; // Set currentPage equal to totalPages
    component.totalPages = 3; // Set totalPages equal to currentPage

    component.goOnNextPage();

    expect(mockEvent).not.toHaveBeenCalled();
  });
});
