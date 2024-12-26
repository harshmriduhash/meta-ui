'use client';

import React, { ButtonHTMLAttributes } from 'react';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const button = cva('rounded-full relative font-bold transition-colors duration-300', {
  variants: {
    variant: {
      default: 'bg-blue text-white border border-blue bg-blue border border-current hover:bg-white hover:text-blue',
      outline: 'bg-transparent text-blue border text-blue border-blue hover:bg-blue hover:text-white',
    },
    size: {
      large: 'h-[64px] uppercase px-[33px] text-2xl',
      medium: 'h-[56px] px-5 text-base',
    },
    disabled: {
      true: 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed hover:bg-gray-300 hover:text-gray-500',
    },
  },
  compoundVariants: [
    {
      disabled: true,
      variant: 'default',
      className: 'border-gray-300 text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300 hover:text-gray-500',
    },
    {
      disabled: true,
      variant: 'outline',
      className: '  cursor-not-allowed text-gray-500 bg-transparent hover:bg-transparent border-gray-300',
    },
  ],

  defaultVariants: {
    variant: 'default',
    size: 'large',
  },
});

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, VariantProps<typeof button> {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button = ({ children, variant, size, disabled, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(button({ variant, size, disabled }), className)} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
