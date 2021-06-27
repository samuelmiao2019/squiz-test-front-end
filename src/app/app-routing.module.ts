import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { DataSearchComponent } from './components/data-search/data-search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DataSearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
