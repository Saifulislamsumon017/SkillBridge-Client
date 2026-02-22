import { env } from '@/env';
import { cookies } from 'next/headers';

const AUTH_URL = env.AUTH_APP_URL;

export const userService = {
  async getSession() {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: 'no-store',
      });

      const session = await res.json();

      if (!session) return { data: null };

      return { data: session };
    } catch (error) {
      console.error(error);
      return { data: null };
    }
  },
};
