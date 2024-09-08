interface StatValueProps {
  value: string;
}

export function StatValue({ value }: StatValueProps) {
  return <div className='text-2xl font-bold'>{value}</div>;
}
