import { TableHead } from '@/components/ui/table';

interface TableHeaderCellProps {
  children: React.ReactNode;
}

export function TableHeaderCell({ children }: TableHeaderCellProps) {
  return <TableHead className='font-medium'>{children}</TableHead>;
}
