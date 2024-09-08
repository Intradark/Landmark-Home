import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHeader } from '@/components/ui/table';
import { TableRow } from '@/components/molecules/TableRow/TableRow';

interface DataTableProps {
  title: string;
  headers: string[];
  rows: string[][];
}

export function DataTable({ title, headers, rows }: DataTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow data={headers} isHeader={true} />
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} data={row} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
