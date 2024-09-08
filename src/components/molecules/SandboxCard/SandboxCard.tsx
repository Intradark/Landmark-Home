import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SandboxCardProps {
  title: string;
  href: string;
}

const SandboxCard: React.FC<SandboxCardProps> = ({ title, href }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Button asChild className='m-4'>
        <Link href={href}>Open</Link>
      </Button>
    </Card>
  );
};

export default SandboxCard;
