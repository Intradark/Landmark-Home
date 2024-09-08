import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function UpgradeCard() {
  return (
    <Card>
      <CardHeader className='p-2 pt-0 md:p-4'>
        <CardTitle>Request a Feature</CardTitle>
        <CardDescription>
          Have an idea for Landmark? Speak to @Aaron from the marketing
          department!
        </CardDescription>
      </CardHeader>
      <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
        <Button size='sm' className='w-full'>
          Message
        </Button>
      </CardContent>
    </Card>
  );
}
