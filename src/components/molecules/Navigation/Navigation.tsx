import {
  Home,
  Newspaper,
  CheckSquare,
  Mail,
  Box,
  LineChart,
} from 'lucide-react';
import { NavLink } from '@/components/atoms/NavLink/NavLink';

export function Navigation() {
  const links = [
    { href: '/dashboard', icon: Home, label: 'Dashboard' },
    { href: '/news', icon: Newspaper, label: 'News' },
    { href: '/tasks', icon: CheckSquare, label: 'Tasks' },
    { href: '/mailouts', icon: Mail, label: 'Mailouts' },
    { href: '/sandbox', icon: Box, label: 'Sandbox' },
    { href: '/analytics', icon: LineChart, label: 'Analytics' },
  ];

  return (
    <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
      {links.map((link) => (
        <NavLink key={link.href} href={link.href} icon={link.icon}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
