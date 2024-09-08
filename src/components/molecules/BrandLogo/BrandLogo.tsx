import { Logo } from '@/components/atoms/Logo/Logo';
import { Separator } from '@/components/ui/separator';
import { Dot } from '@/components/atoms/Dot/Dot';
import { BrandName } from '@/components/atoms/BrandName/BrandName';

export function BrandLogo() {
  return (
    <div className='flex flex-col items-center'>
      <Logo />
      <Separator className='w-1/3 mt-4 mb-6 bg-white' />
      <div className='flex items-center justify-center gap-4'>
        <Dot size='small' />
        <Dot size='large' />
        <BrandName />
        <Dot size='large' />
        <Dot size='small' />
      </div>
    </div>
  );
}
