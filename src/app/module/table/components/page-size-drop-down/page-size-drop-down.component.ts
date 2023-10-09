import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-size-drop-down',
  templateUrl: './page-size-drop-down.component.html',
  styleUrls: ['./page-size-drop-down.component.scss'],
})
export class PageSizeDropDownComponent {
  @Input() size: number = 0;
  @Output() sizeChange = new EventEmitter<number>();

  onChangePageNumber() {
    this.sizeChange.emit(this.size);
  }
}
