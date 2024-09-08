import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatValue } from '@/components/atoms/StatValue/StatValue';
import { StatLabel } from '@/components/atoms/StatLabel/StatLabel';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  label: string;
  icon: LucideIcon;
}

export function StatCard({ title, value, label, icon: Icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        <Icon className='h-4 w-4 text-muted-foreground' />
      </CardHeader>
      <CardContent>
        <StatValue value={value} />
        <StatLabel label={label} />
      </CardContent>
    </Card>
  );
}
