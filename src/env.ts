import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SERVER_APP_URL: z.string().url(),
    AUTH_APP_URL: z.string().url(),
    FRONTEND_APP_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_FRONTEND_URL: z.string().url(),
  },
  runtimeEnv: {
    SERVER_APP_URL: process.env.SERVER_APP_URL,
    AUTH_APP_URL: process.env.AUTH_APP_URL,
    FRONTEND_APP_URL: process.env.FRONTEND_APP_URL,
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
  },
});
