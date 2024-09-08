'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  badge?: string;
}

export function NavLink({ href, icon: Icon, children, badge }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
        isActive ? 'bg-muted text-primary' : 'text-muted-foreground'
      }`}
    >
      <Icon className='h-4 w-4' />
      {children}
      {badge && (
        <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
          {badge}
        </Badge>
      )}
    </Link>
  );
}
