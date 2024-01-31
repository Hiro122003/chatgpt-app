'use client';

import {
  Timestamp,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  snapshotEqual,
  where,
} from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { GoPlusCircle } from 'react-icons/go';
import { db } from '../../../firebase';
import { Room } from '../utils/type';
import { GlobalContext, useGlobalContext } from '../context';

const Sidebar = () => {
  const { rooms, setRooms } = useGlobalContext();
  useEffect(() => {
    const fetchRooms = async () => {
      const roomCollectionRef = collection(db, 'rooms');
      const q = query(
        roomCollectionRef,
        where('userId', '==', 'eLUqXXioHPhL4FW'),
        orderBy('createdAt', 'desc')
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newRooms: Room[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          createdAt: doc.data().createdAt,
        }));
        setRooms(newRooms);
      });
    };
    fetchRooms();
  }, []); //後にuserIdを追加する

  // サブコレクションも取得する方法
  // useEffect(() => {
  //   const fetchRooms = async () => {
  //     const roomCollectionRef = collection(db, "rooms");
  //     const q = query(roomCollectionRef, orderBy("createdAt", "desc"));

  //     const unsubscribe = onSnapshot(q, (snapshot) => {
  //       snapshot.docs.forEach((doc) => {
  //         const roomId = doc.id;
  //         const subCollectionRef = collection(db, "rooms", roomId, "messages"); // subCollectionNameをサブコレクションの名前に置き換えてください
  //         const subCollectionQuery = query(subCollectionRef, orderBy("createdAt", "desc"));

  //         const unsubscribeSub = onSnapshot(subCollectionQuery, (subSnapshot) => {
  //           console.log(subSnapshot.docs.map((subDoc) => subDoc.data()));
  //         });
  //       });
  //     });
  //   };
  //   fetchRooms();
  // }, []);

  return (
    <div className="bg-custom-gradient h-full overflow-y-auto px-5 flex flex-col ">
      <div className="flex-grow ">
        <div className="cursor-pointer flex justify-evenly items-center border mt-2 rounded-md hover:bg-blue-500 hover:bg-opacity-500">
          {/* <span className="text-white p-4 text-2xl">+</span> */}
          <GoPlusCircle size={18} color="white" />
          <h1 className="text-white xs:font-thin md:font-semibold sm:text-sm sm:p-2 md:text-md p-3 lg:text-xl lg:p-4 xl:text-2xl whitespace-nowrap">
            New Chat
          </h1>
        </div>
        <ul>
          {rooms.map((room) => (
            <li
              key={room.id}
              className="cursor-pointer border-b-2 text-slate-100
              text-wrap text-[2vh] lg:text-md lg:text-lg p-3 hover:bg-blue-500 hover:bg-opacity-500 transition ease-in-out duration-500"
            >
              {room.name}
            </li>
          ))}

          {/* <li className="cursor-pointer border-b-2 text-slate-100 text-md p-3 hover:bg-blue-500 hover:bg-opacity-500 transition ease-in-out duration-500">
            Room 1
          </li>
          <li className="cursor-pointer border-b-2 text-slate-100 text-md p-3 hover:bg-blue-500 hover:bg-opacity-500 transition ease-in-out duration-500">
            Room 1
          </li>
          <li className="cursor-pointer border-b-2 text-slate-100 text-md p-3 hover:bg-blue-500 hover:bg-opacity-500 transition ease-in-out duration-500">
            Room 1
          </li> */}
        </ul>
      </div>
      <div className="flex items-center justify-evenly mb-2 cursor-pointer p-4 text-slate-100 hover:bg-slate-700 duration-150 rounded-md">
        <BiLogOut size={24} />
        <span className="whitespace-nowrap sm:text-sm lg:text-xl">
          ログアウト
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
