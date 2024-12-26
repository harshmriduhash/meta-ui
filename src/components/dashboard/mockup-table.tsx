'use client';

import Link from 'next/link';
import { api } from '~/trpc/react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { Label } from '~/components/ui/label';
import { Switch } from '~/components/ui/switch';
import { Button } from '~/components/ui/button';
import { FaTrash, FaPen } from 'react-icons/fa6';
import SkeletonTable from './skeleton-table';
import Error from '../error';

const MockupTable = () => {
  const { data: mockups, isLoading, error } = api.mockUp.getAll.useQuery();

  const trpcContext = api.useContext();

  const updateStatusMutation = api.mockUp.updateStatus.useMutation({
    onSuccess: () => {
      trpcContext.mockUp.getAll.invalidate();
    },
  });

  if (!mockups) return <SkeletonTable />;
  if (isLoading) return <SkeletonTable />;
  if (error) return <Error />;

  return (
    <section className='relative m-5 mx-auto max-w-6xl overflow-auto rounded-lg border bg-card'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] text-left'>NO</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className='text-right'>Status</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockups.map((mockup, index) => (
            <TableRow key={mockup.id}>
              <TableCell className='w-[100px] text-left'>{index + 1}</TableCell>

              <TableCell className='font-medium'>
                <Link className='block capitalize' href={`/templates/${mockup.slug}`} key={mockup.id}>
                  {mockup.name}
                </Link>
              </TableCell>
              <TableCell>{mockup.createdAt.toDateString()}</TableCell>

              <TableCell>
                <div className='flex items-center justify-end space-x-2'>
                  <Switch
                    onCheckedChange={(value) => {
                      updateStatusMutation.mutate({ id: mockup.id, value });
                    }}
                    defaultChecked={mockup.isEnabled}
                    id='status'
                  />
                  <Label htmlFor='status'>
                    {mockup.isEnabled ? (
                      <span className='text-lime-600'>Active</span>
                    ) : (
                      <span className='text-red-600'>Disabled</span>
                    )}
                  </Label>
                </div>
              </TableCell>
              <TableCell className='flex items-center justify-end gap-2 text-right'>
                <Button className='transition-colors duration-300 hover:bg-light-gray' variant='secondary' size='sm'>
                  <FaPen />
                </Button>

                <Button className='transition-colors duration-300 hover:bg-light-gray' variant='secondary' size='sm'>
                  <FaTrash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};
export default MockupTable;
