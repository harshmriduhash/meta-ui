'use client';

import { useUser } from '@clerk/nextjs';
import { CalendarDays, Mail, User, Key } from 'lucide-react';

export default function UserInfo() {
  const { user } = useUser();

  return (
    <div className='mx-auto w-full max-w-md overflow-hidden rounded-lg border bg-background text-foreground'>
      <div className='bg-foreground/10 p-6'>
        <div className='flex flex-col items-center space-y-4'>
          <div className='h-24 w-24 overflow-hidden rounded-full border-4 border-background shadow-inner'>
            {user?.imageUrl ? (
              <img src={user.imageUrl} alt={user?.fullName || 'User avatar'} className='h-full w-full object-cover' />
            ) : (
              <div className='flex h-full w-full items-center justify-center bg-foreground/20 text-2xl font-bold'>
                {user?.fullName?.[0] || 'U'}
              </div>
            )}
          </div>
          <h2 className='text-2xl font-bold'>{user?.fullName}</h2>
        </div>
      </div>
      <div className='space-y-4 px-6 pb-6'>
        <div className='flex items-center space-x-4 rounded-lg border p-3 transition-colors hover:bg-foreground/5'>
          <Mail className='h-5 w-5 text-foreground/70' />
          <span className='truncate text-sm font-medium'>{user?.primaryEmailAddress?.emailAddress}</span>
        </div>
        <div className='flex items-center space-x-4 rounded-lg border p-3 transition-colors hover:bg-foreground/5'>
          <Key className='h-5 w-5 text-foreground/70' />
          <span className='text-sm font-medium'>{user?.id}</span>
        </div>
        <div className='flex items-center space-x-4 rounded-lg border p-3 transition-colors hover:bg-foreground/5'>
          <CalendarDays className='h-5 w-5 text-foreground/70' />
          <span className='text-sm font-medium'>
            {user?.createdAt
              ? new Date(user.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
}
