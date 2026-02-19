export interface IUser {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  role?: string;
  phone?: string;
  status?: string;
  tutorStatus?: string;
  createdAt: string;
  updatedAt: string;
}
