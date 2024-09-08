'use client';

import { StatsGrid } from '@/components/organisms/StatsGrid/StatsGrid';
import { DataTable } from '@/components/organisms/DataTable/DataTable';
import { NewsList } from '@/components/organisms/NewsList/NewsList';

export default function Dashboard() {
  const leadsData = {
    headers: ['Name', 'Asset Class', 'Budget', 'Status'],
    rows: [
      ['John Doe', 'Fast Food Franchise', '$2.5M - $3.5M', 'Hot'],
      ['Jane Smith', 'Healthcare Centre', '$5M - $7M', 'Warm'],
      ['Bob Johnson', 'Pub', '$1.5M - $2M', 'Cold'],
    ],
  };

  const propertiesData = {
    headers: ['Property', 'Type', 'Status'],
    rows: [
      ['123 Main St', 'Fast Food', 'Leased'],
      ['456 Oak Ave', 'Childcare', 'For Sale'],
      ['789 Pine Rd', 'Healthcare', 'Under Offer'],
    ],
  };

  const tasksData = {
    headers: ['Task', 'Due Date', 'Priority'],
    rows: [
      ['Follow up with John Doe', '2023-06-15', 'High'],
      ['Prepare listing for 456 Oak Ave', '2023-06-18', 'Medium'],
      ['Schedule property inspection', '2023-06-20', 'Low'],
    ],
  };

  const newsData = [
    {
      title: 'Commercial Real Estate Market Shows Strong Recovery',
      content:
        'The commercial real estate market is showing signs of a robust recovery, with increased demand across various asset classes...',
    },
    {
      title: 'New Regulations Impact Childcare Centre Investments',
      content:
        'Recent changes in regulations are affecting investments in childcare centres, with new requirements for space and staffing...',
    },
    {
      title: 'Tech Companies Driving Demand for Large Format Retail Spaces',
      content:
        'Tech giants are increasingly looking to convert large format retail spaces into innovation hubs and mixed-use developments...',
    },
  ];

  return (
    <div className='bg-background text-foreground'>
      <div className='max-w-6xl mx-auto p-4 space-y-4'>
        <StatsGrid />
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <div className='col-span-4'>
            <DataTable
              title='Leads'
              headers={leadsData.headers}
              rows={leadsData.rows}
            />
          </div>
          <div className='col-span-3'>
            <DataTable
              title='Managed Properties'
              headers={propertiesData.headers}
              rows={propertiesData.rows}
            />
          </div>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <div className='col-span-3'>
            <DataTable
              title='Tasks'
              headers={tasksData.headers}
              rows={tasksData.rows}
            />
          </div>
          <div className='col-span-4'>
            <NewsList news={newsData} />
          </div>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <div className='col-span-3'>
            <DataTable
              title='Tasks'
              headers={tasksData.headers}
              rows={tasksData.rows}
            />
          </div>
          <div className='col-span-4'>
            <NewsList news={newsData} />
          </div>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <div className='col-span-3'>
            <DataTable
              title='Tasks'
              headers={tasksData.headers}
              rows={tasksData.rows}
            />
          </div>
          <div className='col-span-4'>
            <NewsList news={newsData} />
          </div>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <div className='col-span-3'>
            <DataTable
              title='Tasks'
              headers={tasksData.headers}
              rows={tasksData.rows}
            />
          </div>
          <div className='col-span-4'>
            <NewsList news={newsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
