import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePixelawProvider } from '@pixelaw/react';
import { PwarContractService } from '@/Provider/PwarContractInteractions';
import { DojoWallet } from "@pixelaw/core-dojo";
import { setupWorld } from '@/config/contracts.gen';

// Define the context value type
interface PwarContextValue {
  contractService: PwarContractService | null;
  interact: (x: number, y: number) => Promise<void>;
  update_pixel: (x: number, y: number) => Promise<void>;
}

// Create the context
const PwarContext = createContext<PwarContextValue | undefined>(undefined);

// Provider props type
interface PwarProviderProps {
  children: ReactNode;
}

// Provider component
export const PwarProvider: React.FC<PwarProviderProps> = ({ children }) => {
  const { pixelawCore } = usePixelawProvider();
  const [contractService, setContractService] = useState<PwarContractService | null>(null);

  // Initialize contract service
  useEffect(() => {
    if (!pixelawCore) return;

    const wallet = pixelawCore.getWallet() as DojoWallet;
    if (!wallet) {
      console.error('Failed to get wallet:', wallet);
      throw new Error('No wallet found');
    }

    try {
      
      // const account = wallet.getAccount();
      const account = wallet.account;
      const provider = pixelawCore.engine["dojoSetup"].provider;
      // const world = setupWorld(pixelawCore.engine["dojoSetup"].provider)
      const world = setupWorld(provider);
      
      const service = new PwarContractService(account, provider);
      setContractService(service);
    } catch (err) {
      console.error('Failed to initialize contract service:', err);
    }
  }, [pixelawCore]);

  const interact = async (x: number, y: number) => {
    if (!contractService) {
      throw new Error('Contract service not initialized');
    }
    await contractService.interact(x, y);
  };

  const update_pixel = async (x: number, y: number) => {
    if (!contractService) {
      throw new Error('Contract service not initialized');
    }
    await contractService.update_pixel(x, y);
  };

  const contextValue: PwarContextValue = {
    contractService,
    interact,
    update_pixel
  };

  return React.createElement(PwarContext.Provider, { value: contextValue }, children);
};

// Custom hook to use the Pwar context
export const usePwarProvider = () => {
  const context = useContext(PwarContext);
  if (context === undefined) {
    throw new Error('usePwar must be used within a PwarProvider');
  }
  return context;
};
