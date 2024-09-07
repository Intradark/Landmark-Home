import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PasswordInputProps {
  id: string;
  label: string;
  forgotPasswordLink: string;
  required?: boolean;
}

export function PasswordInput({
  id,
  label,
  forgotPasswordLink,
  required,
}: PasswordInputProps) {
  return (
    <div className='grid gap-2'>
      <div className='flex items-center'>
        <Label htmlFor={id}>{label}</Label>
        <Link
          href={forgotPasswordLink}
          className='ml-auto inline-block text-sm underline'
        >
          Forgot your password?
        </Link>
      </div>
      <Input id={id} type='password' required={required} />
    </div>
  );
}
