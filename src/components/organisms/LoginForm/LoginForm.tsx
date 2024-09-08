import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageTitle } from '@/components/atoms/PageTitle/PageTitle';
import { PageDescription } from '@/components/atoms/PageDescription/PageDescription';
import { InputWithLabel } from '@/components/molecules/InputWithLabel/InputWithLabel';
import { PasswordInput } from '@/components/molecules/PasswordInput/PasswordInput';
import { ThemeToggle } from '@/components/atoms/ThemeToggle/ThemeToggle';

export function LoginForm() {
  return (
    <div className='w-full max-w-md space-y-8'>
      <div className='flex justify-between items-center'>
        <PageTitle>Login</PageTitle>
        <ThemeToggle />
      </div>
      <PageDescription>
        Enter your email below to login to your account
      </PageDescription>
      <div className='grid gap-4'>
        <InputWithLabel
          id='email'
          label='Email'
          type='email'
          placeholder='m@example.com'
          required
        />
        <PasswordInput
          id='password'
          label='Password'
          forgotPasswordLink='/forgot-password'
          required
        />
        <Button type='submit' className='w-full'>
          Login
        </Button>
      </div>
      <div className='mt-4 text-center text-sm'>
        Don&apos;t have an account?{' '}
        <Link href='#' className='underline'>
          Sign up
        </Link>
      </div>
    </div>
  );
}
