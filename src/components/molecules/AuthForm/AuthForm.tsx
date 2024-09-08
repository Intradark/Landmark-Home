import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (formData: AuthFormData) => void;
  onToggleMode: () => void;
}

export interface AuthFormData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export function AuthForm({ isLogin, onSubmit, onToggleMode }: AuthFormProps) {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className='grid gap-4'>
      {!isLogin && (
        <div className='grid grid-cols-2 gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='firstName'>First name</Label>
            <Input
              id='firstName'
              placeholder='Max'
              required={!isLogin}
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='lastName'>Last name</Label>
            <Input
              id='lastName'
              placeholder='Robinson'
              required={!isLogin}
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}
      <div className='grid gap-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          placeholder='m@example.com'
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className='grid gap-2'>
        <div className='flex items-center'>
          <Label htmlFor='password'>Password</Label>
          {isLogin && (
            <Link href='#' className='ml-auto inline-block text-sm underline'>
              Forgot your password?
            </Link>
          )}
        </div>
        <Input
          id='password'
          type='password'
          required
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <Button type='submit' className='w-full mt-4'>
        {isLogin ? 'Login' : 'Create an account'}
      </Button>
      <div className='mt-8 text-center text-sm'>
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <Link href='#' className='underline' onClick={onToggleMode}>
          {isLogin ? 'Sign up' : 'Sign in'}
        </Link>
      </div>
    </form>
  );
}
