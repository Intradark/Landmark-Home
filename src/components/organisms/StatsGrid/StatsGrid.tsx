import { StatCard } from '@/components/molecules/StatCard/StatCard';
import { DollarSign, Building2, Briefcase, CheckSquare } from 'lucide-react';

export function StatsGrid() {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <StatCard
        title='Total Revenue'
        value='$45,231,890'
        label='+20.1% from last year'
        icon={DollarSign}
      />
      <StatCard
        title='Active Listings'
        value='145'
        label='+12 this month'
        icon={Building2}
      />
      <StatCard
        title='Closed Deals'
        value='38'
        label='+15% from last quarter'
        icon={Briefcase}
      />
      <StatCard
        title='Pending Tasks'
        value='12'
        label='6 high priority'
        icon={CheckSquare}
      />
    </div>
  );
}
