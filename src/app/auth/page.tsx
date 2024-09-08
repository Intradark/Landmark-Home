'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { BrandLogo } from '@/components/molecules/BrandLogo/BrandLogo';
import { AuthCard } from '@/components/organisms/AuthCard/AuthCard';
import { AuthFormData } from '@/components/molecules/AuthForm/AuthForm';
import { supabase } from '@/lib/supabase';

export default function AuthPage() {
  const router = useRouter();

  const handleAuth = async (formData: AuthFormData, isLogin: boolean) => {
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              first_name: formData.firstName,
              last_name: formData.lastName,
            },
          },
        });
        if (error) throw error;
        alert('Check your email for the confirmation link!');
      }
      router.push('/');
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <div className='flex h-screen'>
      <div className='hidden lg:block lg:w-1/2 relative bg-slate-800'>
        <Image
          src='/images/burgess-rawson-login-bg.jpg'
          alt='Login background'
          layout='fill'
          objectFit='cover'
          objectPosition='bottom'
          className='z-0 opacity-15'
          style={{
            filter: 'grayscale(1)',
          }}
        />
        <div className='absolute bg-gradient-to-b from-transparent from-1% to-slate-900 to-100% inset-0 z-10' />
        <div className='absolute inset-x-0 flex flex-col items-center justify-center z-10 h-full'>
          <BrandLogo />
        </div>
      </div>
      <div className='w-full lg:w-1/2 flex items-center justify-center p-8 bg-background transition-all'>
        <AuthCard onSubmit={handleAuth} />
      </div>
    </div>
  );
}
