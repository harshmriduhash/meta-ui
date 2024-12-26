'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { ModeToggle } from '../mode-toggle';

const navItems: string[] = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const NavBar: React.FC = () => {
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  return (
    <motion.div
      ref={navContainerRef}
      className='fixed inset-x-0 top-4 z-50 h-16 rounded border-none transition-all !duration-300 sm:inset-x-6'
      style={{
        translateY: isNavVisible ? 0 : '-100%',
        opacity: isNavVisible ? 1 : 0,
      }}
    >
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-4'>
          {/* Logo and Product button */}
          <div className='flex items-center gap-7'>Meta UI</div>

          {/* Navigation Links and Audio Button */}
          <div className='flex h-full items-center'>
            <div className='hidden md:block'>
              {navItems.map((item: string, index: number) => (
                <a key={index} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <ModeToggle />
          </div>
        </nav>
      </header>
    </motion.div>
  );
};

export default NavBar;
