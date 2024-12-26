'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { Config } from '~/lib/types';

const UIConfigContext = createContext<Config | undefined>(undefined);

interface UIConfigProviderProps {
  children: ReactNode;
  config: Config;
}
export const UIConfigProvider: React.FC<UIConfigProviderProps> = ({ children, config }) => {
  return <UIConfigContext.Provider value={config}>{children}</UIConfigContext.Provider>;
};

export const useUIConfig = (): Config => {
  const context = useContext(UIConfigContext);
  if (!context) {
    throw new Error('useUIConfig must be used within a UIConfigProvider');
  }

  return context;
};
