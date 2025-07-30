import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface CountContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Create the context with default values
const CountContext = createContext<CountContextType | undefined>(undefined);

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create a provider component
interface CountProviderProps {
  children: ReactNode;
}

export const CountProvider: React.FC<CountProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  };

  const reset = () => {
    setCount(0);
  };

  const value: CountContextType = {
    count,
    increment,
    decrement,
    reset
  };

  return (
    <CountContext.Provider value={value}>
      {children}
    </CountContext.Provider>
  );
};

// Custom hook to use the count context
export const useCount = (): CountContextType => {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

export default CountContext;
