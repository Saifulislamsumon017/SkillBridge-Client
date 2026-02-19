import { ILogin, IRegister } from '@/interfaces/auth.interface';
import { authClient } from '@/lib/auth-client';

export const registerApi = async (data: IRegister) => {
  const result = await authClient.signUp.email(data);
  return result;
};

export const loginApi = async (data: ILogin) => {
  const result = await authClient.signIn.email(data);
  return result;
};

export const googleLoginApi = async () => {
  const result = await authClient.signIn.social({
    provider: 'google',
    callbackURL: process.env.NEXT_PUBLIC_APP_URL,
  });

  return result;
};

export const githubLoginApi = async () => {
  const result = await authClient.signIn.social({
    provider: 'github',
    callbackURL: process.env.NEXT_PUBLIC_APP_URL,
  });

  return result;
};

export const getSessionApi = async () => {
  const result = await authClient.getSession();
  return result;
};

export const logoutApi = async () => {
  const result = await authClient.signOut();
  return result;
};
