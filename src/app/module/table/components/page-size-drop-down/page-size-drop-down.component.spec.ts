import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSizeDropDownComponent } from './page-size-drop-down.component';

describe('PageSizeDropDownComponent', () => {
  let component: PageSizeDropDownComponent;
  let fixture: ComponentFixture<PageSizeDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSizeDropDownComponent],
    });

    fixture = TestBed.createComponent(PageSizeDropDownComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit sizeChange event when onChangePageNumber is called', () => {
    const newSize = 10;

    component.sizeChange.subscribe((emittedSize: number) => {
      expect(emittedSize).toEqual(newSize);
    });

    component.size = newSize;
    component.onChangePageNumber();
  });

  it('should emit sizeChange event when size property changes', () => {
    const newSize = 20;

    component.sizeChange.subscribe((emittedSize: number) => {
      expect(emittedSize).toEqual(newSize);
    });

    component.size = newSize;
    component.sizeChange.emit(component.size);
  });
});
