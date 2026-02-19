'use client';

import { useForm } from '@tanstack/react-form';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { registerSchema } from '@/lib/validators/auth.schema';
import { registerUser } from '@/services/auth.service';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const RegisterPage = () => {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },

    validators: {
      onSubmit: registerSchema,
    },

    onSubmit: async ({ value }) => {
      const toastId = toast.loading('Creating user');

      try {
        const { error } = await registerUser(value);

        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }

        toast.success('User Created Successfully', { id: toastId });
        router.push('/login');
      } catch {
        toast.error('Something went wrong, please try again.', {
          id: toastId,
        });
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={e => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-4 w-80"
      >
        <form.Field name="name">
          {field => (
            <Input
              placeholder="Name"
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>

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
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
