'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Room } from '../utils/type';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  rooms: Room[];
  setRooms: Dispatch<SetStateAction<Room[]>>;
  user: User | null;
  setUser: Dispatch<SetStateAction<any | null>>;
  userId: string | null;
  selectedRoom: string | null;
  setSelectedRoom: Dispatch<SetStateAction<string | null>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
  rooms: [],
  setRooms: () => {},
  user: null,
  setUser: () => {},
  userId: null,
  selectedRoom: null,
  setSelectedRoom: () => {},
};

const GlobalContext = createContext<ContextType>(initialState);

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalState = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const router = useRouter()

  // ユーザ情報の取得(user認証なければログインページへ遷移)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserId(user.uid);
      }else {
        router.push('/auth/login')
      }
    });
    return () => unsubscribe();
  }, []);

  

  // console.log(user, 'user')
  // console.log(userId, 'userId')

  const value = {
    loading,
    setLoading,
    rooms,
    setRooms,
    user,
    setUser,
    userId,
    setUserId,
    selectedRoom,
    setSelectedRoom,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
