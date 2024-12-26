import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '~/components/ui/table';
import { Skeleton } from '~/components/ui/skeleton';

export default function SkeletonTable() {
  return (
    <div className='relative m-5 mx-auto max-w-6xl rounded-lg border bg-card'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>
              <Skeleton className='h-4 w-[100px]' />
            </TableHead>
            <TableHead>
              <Skeleton className='h-4 w-[100px]' />
            </TableHead>
            <TableHead>
              <Skeleton className='h-4 w-[100px]' />
            </TableHead>
            <TableHead className='text-right'>
              <Skeleton className='h-4 w-[100px]' />
            </TableHead>
            <TableHead className='text-right'>
              <Skeleton className='h-4 w-[100px]' />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(10)
            .fill('*')
            .map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className='h-4 w-[100px]' />
                </TableCell>
                <TableCell>
                  <Skeleton className='h-4 w-[100px]' />
                </TableCell>
                <TableCell>
                  <Skeleton className='h-4 w-[100px]' />
                </TableCell>
                <TableCell className='text-right'>
                  <Skeleton className='h-4 w-[100px]' />
                </TableCell>
                <TableCell className='text-right'>
                  <Skeleton className='h-4 w-[100px]' />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
