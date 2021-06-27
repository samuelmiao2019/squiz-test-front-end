import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild
} from '@angular/core';
import {
  ColumnMode,
  DatatableComponent
} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent {

  @Input() columnMode: ColumnMode = ColumnMode.force;
  @Input() columns: Array<any>;
  @Input() headerHeight: number = 40;
  @Input() rowHeight: number | 'auto' = 'auto';
  @Input() rows: Array<any>;

  @ViewChild('dataTable') dataTable: DatatableComponent;

  constructor() {
  }

  public recalculateDataTable(): void {
    if (this.dataTable) {
      this.dataTable.recalculate();
      this.dataTable.recalculateColumns();
      this.dataTable['cd'].markForCheck();
      this.dataTable.bodyComponent['cd'].markForCheck();
    }
  }
}
