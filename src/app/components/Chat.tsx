'use client';

import {
  Timestamp,
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { BsSendPlus } from 'react-icons/bs';
import { db } from '../../../firebase';
import { useGlobalContext } from '../context';

type Messsage = {
  id:string;
  sender: string;
  text: string;
  createdAt: Timestamp;
};

const Chat = () => {
  const [inputMessage, setInputMessage] = useState<string>('');
  const [messages, setMessages] = useState<Messsage[]>([]);

  const { selectedRoom } = useGlobalContext();

  // メッセージを送信する関数
  const sendMessage = async () => {
    if (!inputMessage) return;
    if (selectedRoom === null) return;
    const messageCollectionRef = collection(
      db,
      'rooms',
      selectedRoom,
      'messages'
    );
    await addDoc(messageCollectionRef, {
      createdAt: serverTimestamp(),
      sender: 'user',
      text: inputMessage,
    });
    // console.log('message sent');
  };

  // 各ルームのメッセージを取得する関数
  useEffect(() => {
    // console.log(selectedRoom, 'selectedRoom')
    if (selectedRoom) {
      const fetchMessages = async () => {
        const messageCollectionRef = collection(
          db,
          'rooms',
          selectedRoom,
          'messages'
        );
        const q = query(messageCollectionRef, orderBy('createdAt', 'asc'));
        const unsbuscribe = onSnapshot(q, (snapshot) => {
          const newMessages = snapshot.docs.map(
            (doc) => ({id:doc.id,...doc.data()} as Messsage)
          );
          setMessages(newMessages);
        });
        return () => unsbuscribe();
      };
      fetchMessages();
    }
  }, [selectedRoom]);

  console.log(messages, 'messages');

  return (
    <div className="h-full overflow-y-auto px-5 flex flex-col bg-gradient-to-bl from-blue-300 via-slate-300 to-blue-300">
      <h1 className="text-xl text-red-800 font-semibold mb-4 ">Room1</h1>
      <div className="flex-grow overflow-y-auto mb-4 ">
        {messages.map((message) => (
          <>
            <div key={message.id} className="text-right">
              <div className="bg-blue-500 inline-block rounded-md px-4 py-2">
                <p className="text-white font-medium">{message.text}</p>
              </div>
            </div>
            <div className="text-left">
              <div className="bg-green-500 inline-block rounded-md px-4 py-2">
                <p className="text-white font-medium">{message.text}</p>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="flex-shrink-0 relative mb-2">
        <input
          type="text"
          className="border-2 rounded w-full pr-10 focus:outline-none p-2"
          placeholder="Send a Message"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputMessage(e.target.value)
          }
        />
        <button
          onClick={() => sendMessage()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center pr-1"
        >
          <BsSendPlus size={24} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
