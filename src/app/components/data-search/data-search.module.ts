import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { DataTableModule } from 'src/app/ui/common/data-table/data-table.module';
import { PaginationModule } from 'src/app/ui/common/pagination/pagination.module';
import { DataSearchConditionsComponent } from './data-search-conditions.component';
import { DataSearchResultComponent } from './data-search-result.component';
import { DataSearchComponent } from './data-search.component';

@NgModule({
  declarations: [
    DataSearchComponent,
    DataSearchConditionsComponent,
    DataSearchResultComponent,
  ],
  imports: [
    CommonModule,
    DataTableModule,
    FontAwesomeModule,
    FormsModule,
    PaginationModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    DataSearchResultComponent,
  ]
})
export class DataSearchModule {};
