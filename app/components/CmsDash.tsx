'use client';

import {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useRef,
} from 'react';
import { getCMSTypes } from '../db/redis';
import CmsTypes from './CmsTypes';
import CmsItems from './CmsItems';
interface TypeContextValue {
  types: { [key: string]: string };
  setTypes: Dispatch<SetStateAction<React.ReactNode[]>>;
  getCMSTypes2: () => Promise<void>;
  itemsCache: { [key: string]: string };
}

const TypeContext = createContext<TypeContextValue | null>(null);

export default function CmsDash() {
  const [types, setTypes] = useState({});
  const [view, setView] = useState('types');
  const itemsCache = useRef<{ [key: string]: string }>({});
  async function getCMSTypes2() {
    const types = await getCMSTypes();
    if (types) {
      setTypes(JSON.parse(types));
    }
  }
  function handleClickView(e: React.MouseEvent<HTMLButtonElement>) {
    setView(e.currentTarget.id);
  }
  return (
    <TypeContext.Provider
      value={{ types, setTypes, getCMSTypes2, itemsCache: itemsCache.current }}
    >
      <div className='absolute w-full h-full'>
        <div
          id='menu'
          className='absolute left-0 h-full w-24 bg-slate-50 py-24'
        >
          <button
            id='types'
            onClick={(e) => handleClickView(e)}
            className='w-full h-24 border-y p-0 m-0 bg-zinc-50 text-zinc-800 font-normal border-zinc-800'
          >
            Types
          </button>
          <button
            id='items'
            onClick={(e) => handleClickView(e)}
            className='w-full h-24 border-b p-0 m-0 bg-zinc-50 text-zinc-800 font-normal border-zinc-800'
          >
            Items
          </button>

          <button
            id='settings'
            onClick={(e) => handleClickView(e)}
            className='w-full h-24 border-b p-0 m-0 bg-zinc-50 text-zinc-800 font-normal border-zinc-800'
          >
            Settings
          </button>
          <button
            id='refresh'
            className='w-full h-24 border-b  p-0 m-0 bg-zinc-50 text-zinc-800 font-normal border-zinc-800'
            onClick={(e) => {
              e.preventDefault();
              getCMSTypes2();
            }}
          >
            Refresh
          </button>
        </div>
        {JSON.stringify(types)}
        <div className='h-1/2 w-1/2 relative top-1/4 left-1/4 '>
          {view === 'types' && <CmsTypes />}
          {view === 'items' && <CmsItems />}
          {view === 'settings' && <div>Settings</div>}
        </div>
      </div>
    </TypeContext.Provider>
  );
}

export function useTypeContext() {
  const context = useContext(TypeContext);
  if (!context) {
    throw new Error(
      'useTypeContext must be used within a TypeContext.Provider'
    );
  }
  return context;
}
