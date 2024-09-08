import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AuthForm,
  AuthFormData,
} from '@/components/molecules/AuthForm/AuthForm';

interface AuthCardProps {
  onSubmit: (formData: AuthFormData, isLogin: boolean) => void;
}

export function AuthCard({ onSubmit }: AuthCardProps) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (formData: AuthFormData) => {
    onSubmit(formData, isLogin);
  };

  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle className='text-2xl'>
          {isLogin ? 'Login' : 'Sign Up'}
        </CardTitle>
        <CardDescription>
          {isLogin
            ? 'Enter your email below to login to your account'
            : 'Enter your information to create an account'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AuthForm
          isLogin={isLogin}
          onSubmit={handleSubmit}
          onToggleMode={() => setIsLogin(!isLogin)}
        />
      </CardContent>
    </Card>
  );
}
