import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Goal } from '../model/goal.enum';
import { Idea } from '../model/idea';

const apiUrl = environment.apiUrl + '/idea';

export interface IdeasSearchingParams {
  offset: number;
  limit: number;
  searchKey: string;
  searchGoal: Goal;
};

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  private isMocking: boolean = true;
  private ideas$: BehaviorSubject<Array<Idea>> = new BehaviorSubject<Array<Idea>>(this.getMockedIdeas());

  constructor(private http: HttpClient) {
  }

  searchIdeas(searchingParams): void {
    if (this.isMocking) {
      this.ideas$.next(this.getMockedIdeas());
    } else {

      const params = {
        limit: searchingParams.limit,
        offset: searchingParams.offset,
        searchKey: searchingParams.searchKey,
      };
  
      this.http.get<Array<Idea>>(`${apiUrl}`, { params })
      .subscribe(ideas => {
        this.ideas$.next(ideas);
      });
    }
  }

  getIdeas$(): Observable<Array<Idea>> {
    return this.ideas$.asObservable();
  };

  private getMockedIdeas(): Array<Idea> {
    return [
      {
        id: 1,
        description: 'This is a description',
        publishedDate: '27/06/2021',
        publisher: 'Samuel Miao',
        thumbnailUrl: 'https://www.google.com.au',
        title: 'About dream',
        goal: Goal.education,
      },
      {
        id: 2,
        description: 'This is a description',
        publishedDate: '27/06/2021',
        publisher: 'Samuel Miao',
        thumbnailUrl: 'https://www.google.com.au',
        title: 'About dream',
        goal: Goal.education,
      },
      {
        id: 3,
        description: 'This is a description',
        publishedDate: '27/06/2021',
        publisher: 'Samuel Miao',
        thumbnailUrl: 'https://www.google.com.au',
        title: 'About dream',
        goal: Goal.education,
      },
      {
        id: 4,
        description: 'This is a description',
        publishedDate: '27/06/2021',
        publisher: 'Samuel Miao',
        thumbnailUrl: 'https://www.google.com.au',
        title: 'About dream',
        goal: Goal.education,
      },
      {
        id: 5,
        description: 'This is a description',
        publishedDate: '27/06/2021',
        publisher: 'Samuel Miao',
        thumbnailUrl: 'https://www.google.com.au',
        title: 'About dream',
        goal: Goal.education,
      },
      {
        id: 6,
        description: 'This is a description',
        publishedDate: '27/06/2021',
        publisher: 'Samuel Miao',
        thumbnailUrl: 'https://www.google.com.au',
        title: 'About dream',
        goal: Goal.education,
      },
    ];
  }
}
