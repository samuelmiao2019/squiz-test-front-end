import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChildren
} from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { DataTableColumnDirective } from './data-table-column/data-table-column.directive';

@Component({
  template: ''
})
export abstract  class AbstractTableComponent implements AfterViewInit {

  columns: Array<TableColumn> = [];

  @ViewChildren(DataTableColumnDirective) public dataTableColumns: QueryList<DataTableColumnDirective>;

  public ngAfterViewInit(): void {
    this.initColumnsAndTemplates();
  }

  protected getColumns(): Array<TableColumn> {
    return [];
  }

  private initColumnsAndTemplates(): void {
    this.columns = this.getColumns();
    this.initTemplatesFromViewChildren(this.columns);
  }

  private initTemplatesFromViewChildren(columns: Array<TableColumn>): void {
    this.addTemplates(columns);
  }

  private addTemplates(columns: Array<TableColumn>): void {
    if (columns && this.dataTableColumns) {
      columns.forEach(column => {
        const dataTableColumn = this.dataTableColumns.find(col => column.prop === col.getColumnId());
        if (!dataTableColumn) {
          return;
        }
        column.cellTemplate = column.cellTemplate || dataTableColumn.getTemplate();
      });
    }
  }
}
