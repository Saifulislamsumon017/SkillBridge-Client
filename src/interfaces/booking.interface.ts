import { IUser } from './user.interface';
import { ITutorProfile } from './tutor.interface';
import { BOOKING_STATUS } from '@/constants/booking';

export interface IBooking {
  id: string;
  studentId: string;
  tutorId: string;
  date: string;
  status: BOOKING_STATUS;

  student: IUser;
  tutor: ITutorProfile;

  createdAt: string;
  updatedAt: string;
}
