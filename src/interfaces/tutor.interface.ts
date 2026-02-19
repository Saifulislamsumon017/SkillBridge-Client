import { ITutorSubject } from './tutorSubject.interface';
import { IAvailability } from './availability.interface';
import { TUTOR_STATUS } from '@/constants/tutor';

export interface ITutorProfile {
  id: string;
  userId: string;
  bio?: string;
  hourlyRate: number;
  rating: number;
  status: TUTOR_STATUS;

  subjects: ITutorSubject[];
  availability: IAvailability[];

  createdAt: string;
  updatedAt: string;
}
