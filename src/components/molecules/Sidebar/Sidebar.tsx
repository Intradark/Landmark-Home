import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/atoms/Logo/Logo';
import { Navigation } from '@/components/molecules/Navigation/Navigation';
import { UpgradeCard } from '@/components/molecules/UpgradeCard/UpgradeCard';

export function Sidebar() {
  return (
    <div className='flex h-full max-h-screen flex-col gap-2'>
      <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
        <div className='w-3/5'>
          <Logo />
        </div>
        <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
          <Bell className='h-4 w-4' />
          <span className='sr-only'>Toggle notifications</span>
        </Button>
      </div>
      <div className='flex-1'>
        <Navigation />
      </div>
      <div className='mt-auto p-4'>
        <UpgradeCard />
      </div>
    </div>
  );
}
