import Link from 'next/link';

import { HydrateClient } from '~/trpc/server';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { cn } from '~/lib/utils';

import { ModeToggle } from '~/components/mode-toggle';
import { Button, buttonVariants } from '~/components/ui/button';
import Hero from '~/components/home/Hero';
import NavBar from '~/components/home/Nevbar';

export default function Home() {
  return (
    <HydrateClient>
      <div className='min-h-screen'>
        <NavBar />
        {/* <header>
          <nav className='fixed inset-x-0 top-0 z-50 border-b'>
            <div className='flex h-14 w-full items-center justify-end gap-4 px-4'>
              <SignedOut>
                <Button variant='outline'>
                  <SignInButton />
                </Button>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <ModeToggle />
            </div>
          </nav>
        </header> */}
        <main>
          {/* <SignedIn>
            <div className='flex flex-col items-center gap-4'>
              <Link className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-52')} href='/dashboard'>
                Dashboard
              </Link>
              <Link className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-52')} href='/register'>
                Register
              </Link>
            </div>
          </SignedIn> */}
          <Hero />
        </main>
      </div>
    </HydrateClient>
  );
}
