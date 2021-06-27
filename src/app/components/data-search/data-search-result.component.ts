import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  ColumnMode,
  TableColumn,
} from "@swimlane/ngx-datatable";
import { Observable } from "rxjs";
import { Idea } from "src/app/model/idea";
import { IdeaService } from "src/app/services/idea.service";
import { AbstractTableComponent } from "src/app/ui/common/data-table/abstract-table.component";

@Component({
  selector: 'app-data-search-result',
  templateUrl: './data-search-result.component.html',
  styleUrls: ['./data-search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSearchResultComponent extends AbstractTableComponent implements OnInit {

  @Input() ideas: Array<Idea>;
  @Input() limit = 50;
  @Input() limitOptions: Array<number> = [];
  @Input() offset = 0;
  @Input() total = 0;

  @Output() paginate = new EventEmitter<{ offset: number, limit: number }>();

  public spinnerIcon = faSpinner;
  public isLoading$: Observable<boolean>;
  public loadingError$: Observable<string>;
  public ColumnMode = ColumnMode;
  public columns: Array<TableColumn>;

  constructor() {
    super();
  }

  public ngOnInit(): void {
    this.columns = this.getColumns();
  }

  protected getColumns(): Array<TableColumn> {
    return [{
      name: 'Title',
      prop: 'title',
      flexGrow: 3,
    }, {
      name: 'Description',
      prop: 'description',
      flexGrow: 3,
    }, {
      name: 'Goal',
      prop: 'goal',
      flexGrow: 3,
    }, {
      name: 'Published date',
      prop: 'publishedDate',
      flexGrow: 4,
    }, {
      name: 'Publisher',
      prop: 'publisher',
      flexGrow: 3,
    }, {
      name: 'Thumbnail url',
      prop: 'thumbnailUrl',
      flexGrow: 5,
    }];
  }

  public onChangeLimit() {
    this.offset = 0;
    this.onPaginate({ offset: this.offset, limit: 1 * this.limit });
  }

  public onPaginate(value) {
    this.paginate.emit(value);
  }

  public loadIdeas(): Array<Idea> {
    return [];
  }
}
