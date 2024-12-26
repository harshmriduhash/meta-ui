import React, { memo } from 'react';
import Image from '~/components/templates/components/image';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { TableRow, TableCell } from '~/components/ui/table';
import { ImageFileData } from '~/app/register/page';

interface ImageRowProps {
  item: ImageFileData;
  loading: boolean;
  handleDescriptionChange: (id: string, description: string) => void;
  handleDelete: (id: string) => void;
}

const ImageRow: React.FC<ImageRowProps> = memo(({ item, loading, handleDescriptionChange, handleDelete }) => (
  <TableRow key={item.id} className='border-b border-border hover:bg-muted/50'>
    <TableCell className='py-4 pl-0'>
      <div className='aspect-video w-40 overflow-hidden rounded-lg border border-border'>
        <div className='relative h-full w-full'>
          <Image fill alt='' className='object-cover' src={URL.createObjectURL(item.file)} />
        </div>
      </div>
    </TableCell>

    <TableCell className='py-4'>
      <div className='max-w-20 overflow-hidden text-sm text-muted-foreground' title={item.file.name}>
        {item.file.name}
      </div>
    </TableCell>

    <TableCell className='py-4'>
      <Input
        disabled={loading}
        required
        value={item.description}
        onChange={(e) => handleDescriptionChange(item.id, e.target.value)}
        className='h-10 min-w-52 border-input bg-background text-sm'
        placeholder='Image tag or descriptions'
      />
    </TableCell>

    <TableCell className='py-4 pr-0'>
      <Button disabled={loading} type='button' onClick={() => handleDelete(item.id)} size='sm' variant='destructive'>
        Delete
      </Button>
    </TableCell>
  </TableRow>
));

export default ImageRow;
