import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output, 
} from "@angular/core";
import { 
  FormBuilder,
  FormGroup, 
} from "@angular/forms";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { debounceTime } from "rxjs/operators";
import { GOALS } from "src/app/model/goal";
import { 
  IdeaService,
  IdeasSearchingParams,
} from "src/app/services/idea.service";

@Component({
  selector: 'app-data-search-conditions',
  templateUrl: './data-search-conditions.component.html',
  styleUrls: ['./data-search-conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSearchConditionsComponent {

  public goals = GOALS;
  public searchForm: FormGroup;
  public searchIcon = faSearch;

  @Output() searchClicked = new EventEmitter<IdeasSearchingParams>();

  constructor(
    private ideaService: IdeaService,
    private formBuilder: FormBuilder,
  ) {
  }

  public ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: [''],
      goal: ['']
    });

    this.searchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.search());

    this.search();
  }

  public search(): void {
    this.searchClicked.emit(this.searchForm.value);
  }
}