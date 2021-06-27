import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {IdeaService} from "../../services/idea.service";
import {Idea} from "../../model/idea";

@Component({
  selector: 'app-data-search',
  templateUrl: './data-search.component.html',
  styleUrls: ['./data-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSearchComponent implements OnInit {

  loading: boolean;
  loadingError: any;
  ideas: Idea[];
  limitOptions: Array<number> = [10, 20 ,50, 100];

  constructor(
    private cdr: ChangeDetectorRef,
    private ideaService: IdeaService,
   ) {
  }

  ngOnInit(): void {
    this.ideaService.getIdeas$()
      .subscribe(ideas => {
        this.ideas = ideas;
        this.cdr.detectChanges();
    });
  }
}
