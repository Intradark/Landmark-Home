'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error('Error checking user:', error);
        router.push('/login');
        return;
      }

      if (user) {
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    };

    checkUser();
  }, [router]);

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <p>Redirecting...</p>
    </main>
  );
}
