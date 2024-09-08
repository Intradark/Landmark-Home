import { TableCell } from '@/components/ui/table';

interface TableDataCellProps {
  children: React.ReactNode;
}

export function TableDataCell({ children }: TableDataCellProps) {
  return <TableCell>{children}</TableCell>;
}
