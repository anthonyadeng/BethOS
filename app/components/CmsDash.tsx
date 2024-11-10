'use client';

import {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { getCMSTypes } from '../db/redis';
import CmsTypes from './CmsTypes';
import CmsItems from './CmsItems';
interface TypeContextValue {
  types: React.ReactNode[];
  setTypes: Dispatch<SetStateAction<React.ReactNode[]>>;
  getCMSTypes2: () => Promise<void>;
}

const TypeContext = createContext<TypeContextValue | null>(null);

export default function CmsDash() {
  const [types, setTypes] = useState<React.ReactNode[]>([]);

  async function getCMSTypes2() {
    const types = await getCMSTypes();
    if (types) {
      setTypes(JSON.parse(types));
    }
  }

  return (
    <TypeContext.Provider value={{ types, setTypes, getCMSTypes2 }}>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            getCMSTypes2();
          }}
        >
          Get Test
        </button>
        {JSON.stringify(types)}
        <CmsTypes />
        <CmsItems />
      </div>
    </TypeContext.Provider>
  );
}

// Example of how to use the context in a child component
export function useTypeContext() {
  const context = useContext(TypeContext);
  if (!context) {
    throw new Error(
      'useTypeContext must be used within a TypeContext.Provider'
    );
  }
  return context;
}
