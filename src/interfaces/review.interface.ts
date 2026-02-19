import { REVIEW_STATUS } from '@/constants/review';
import { IUser } from './user.interface';

export interface IReview {
  id: string;
  rating: number;
  comment: string;

  studentId: string;
  tutorId: string;
  bookingId: string;

  parentId?: string;

  replies?: IReview[];

  status: REVIEW_STATUS;

  student: IUser;

  createdAt: string;
  updatedAt: string;
}
