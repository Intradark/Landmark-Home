import { TableRow as UITableRow } from '@/components/ui/table';
import { TableDataCell } from '@/components/atoms/TableDataCell/TableDataCell';
import { TableHeaderCell } from '@/components/atoms/TableHeaderCell/TableHeaderCell';

interface TableRowProps {
  data: string[];
  isHeader?: boolean;
}

export function TableRow({ data, isHeader = false }: TableRowProps) {
  const CellComponent = isHeader ? TableHeaderCell : TableDataCell;

  return (
    <UITableRow>
      {data.map((cell, index) => (
        <CellComponent key={index}>{cell}</CellComponent>
      ))}
    </UITableRow>
  );
}
