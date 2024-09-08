import { Home, ShoppingCart, Package, Users, LineChart } from 'lucide-react';
import { NavLink } from '@/components/atoms/NavLink/NavLink';

export function Navigation() {
  return (
    <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
      <NavLink href='#' icon={Home}>
        Dashboard
      </NavLink>
      <NavLink href='#' icon={ShoppingCart} badge='6'>
        Orders
      </NavLink>
      <NavLink href='#' icon={Package} isActive>
        Products
      </NavLink>
      <NavLink href='#' icon={Users}>
        Customers
      </NavLink>
      <NavLink href='#' icon={LineChart}>
        Analytics
      </NavLink>
    </nav>
  );
}
