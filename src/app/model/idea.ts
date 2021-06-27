import { Goal } from 'src/app/model/goal.enum';

export interface Idea {
  description?: string;
  id?: number;
  publishedDate?: string;
  publisher?: string;
  thumbnailUrl?: string;
  title?: string;
  goal?: Goal;
}
