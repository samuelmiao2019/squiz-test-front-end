import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTableColumnDirective } from './data-table-column/data-table-column.directive';
import { DataTableComponent } from './data-table.component';

@NgModule({
  declarations: [
    DataTableComponent,
    DataTableColumnDirective,
  ],
  imports: [
    NgxDatatableModule,
    CommonModule,
  ],
  exports: [
    DataTableComponent,
    DataTableColumnDirective,
  ]
})
export class DataTableModule {};
