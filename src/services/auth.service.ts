import {
  registerApi,
  loginApi,
  googleLoginApi,
  githubLoginApi,
  logoutApi,
  getSessionApi,
} from '@/api/auth.api';

import { IRegister, ILogin } from '@/interfaces/auth.interface';

export const registerUser = async (data: IRegister) => {
  const result = await registerApi(data);
  return result;
};

export const loginUser = async (data: ILogin) => {
  const result = await loginApi(data);
  return result;
};

export const loginWithGoogle = async () => {
  const result = await googleLoginApi();
  return result;
};

export const loginWithGithub = async () => {
  const result = await githubLoginApi();
  return result;
};

export const logoutUser = async () => {
  const result = await logoutApi();
  return result;
};

export const getSessionUser = async () => {
  const result = await getSessionApi();
  return result;
};
