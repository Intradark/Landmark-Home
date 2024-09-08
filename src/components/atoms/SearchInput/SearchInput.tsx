import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function SearchInput() {
  return (
    <div className='relative w-full md:w-2/3 lg:w-1/3'>
      <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
      <Input
        type='search'
        placeholder='Search products...'
        className='w-full appearance-none bg-background pl-8 shadow-none'
      />
    </div>
  );
}
