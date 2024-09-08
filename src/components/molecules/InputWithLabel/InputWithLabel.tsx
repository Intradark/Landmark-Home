import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputWithLabelProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

export function InputWithLabel({
  id,
  label,
  type,
  placeholder,
  required,
}: InputWithLabelProps) {
  return (
    <div className='grid gap-2'>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
