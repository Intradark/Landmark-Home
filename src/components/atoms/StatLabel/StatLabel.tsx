interface StatLabelProps {
  label: string;
}

export function StatLabel({ label }: StatLabelProps) {
  return <p className='text-xs text-muted-foreground'>{label}</p>;
}
