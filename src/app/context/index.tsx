'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { Room } from '../utils/type';

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  rooms: Room[];
  setRooms: Dispatch<SetStateAction<Room[]>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
  rooms: [],
  setRooms: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}

export const GlobalState = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [rooms, setRooms] = useState<Room[]>([]);

  const value = {
    loading,
    setLoading,
    rooms,
    setRooms,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
