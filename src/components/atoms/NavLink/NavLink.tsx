import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  isActive?: boolean;
  badge?: string;
}

export function NavLink({
  href,
  icon: Icon,
  children,
  isActive,
  badge,
}: NavLinkProps) {
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
        <span className='ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground'>
          {badge}
        </span>
      )}
    </Link>
  );
}
