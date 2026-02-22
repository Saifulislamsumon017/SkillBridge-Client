import { UserRole } from '@/constants/role';

export interface IUser {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  role?: UserRole;
  phone?: string;
  status?: string;
  tutorStatus?: string;
}
