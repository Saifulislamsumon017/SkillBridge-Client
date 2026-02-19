import { ICategory } from './category.interface';

export interface ITutorSubject {
  id: string;
  tutorId: string;
  categoryId: string;
  category: ICategory;
}
