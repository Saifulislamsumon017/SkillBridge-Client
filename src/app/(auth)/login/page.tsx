'use client';

import { useForm } from '@tanstack/react-form';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { loginSchema } from '@/lib/validators/auth.schema';
import { loginUser } from '@/services/auth.service';
import { authClient } from '@/lib/auth-client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const LoginPage = () => {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },

    validators: {
      onSubmit: loginSchema,
    },

    onSubmit: async ({ value }) => {
      const toastId = toast.loading('Logging in...');

      try {
        const { error } = await loginUser(value);

        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }

        toast.success('Login successful', { id: toastId });

        router.push('/dashboard');
      } catch {
        toast.error('Something went wrong', { id: toastId });
      }
    },
  });

  /* 🔥 YOUR REQUIRED FORMAT */

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: process.env.NEXT_PUBLIC_APP_URL!,
    });
  };

  const handleGithubLogin = async () => {
    await authClient.signIn.social({
      provider: 'github',
      callbackURL: process.env.NEXT_PUBLIC_APP_URL!,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={e => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-4 w-80"
      >
        <form.Field name="email">
          {field => (
            <Input
              placeholder="Email"
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>

        <form.Field name="password">
          {field => (
            <Input
              type="password"
              placeholder="Password"
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>

        <Button type="submit" className="w-full">
          Login
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={handleGithubLogin}
        >
          Continue with GitHub
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
