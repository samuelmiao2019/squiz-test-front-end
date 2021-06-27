import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import {
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export interface IPaginationOptions {
  offset: number;
  limit: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  get offset() {
    return this._offset;
  }
  @Input() set offset(value: number) {
    this._offset = value;
    this.setPageNumber();
  }

  get limit() {
    return this._limit;
  }
  @Input() set limit(value: number) {
    this._limit = value;
    this.setPageNumber();
  }

  @Input() total = 0;
  @Output() paginate = new EventEmitter<IPaginationOptions>();

  preIcon = faArrowLeft;
  nextIcon = faArrowRight;
  pageNumber: number;

  private _offset = 0;
  private _limit = 50;

  ngOnInit(): void {
    this.setPageNumber();
  }

  onPrev(): void {
    if (this._offset > 0) {
      this._offset = Math.max(0, this._offset - this._limit);
      this.onRefresh();
    }
  }

  onNext(): void {
    if (this._offset + this._limit < this.total) {
      this._offset += this._limit;
      this.onRefresh();
    }
  }

  onRefresh(): void {
    this.pageNumber = Math.floor(this._offset / this._limit) + 1;
    this.paginate.emit({ offset: this._offset, limit: 1 * this._limit });
  }

  private setPageNumber() {
    this.pageNumber = Math.floor(this._offset / this._limit) + 1;
  }
}
