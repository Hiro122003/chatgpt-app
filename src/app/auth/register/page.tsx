import Button from '@/app/components/button';
import Link from 'next/link';
import React from 'react';

const Register = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form className="bg-white rounded-md shadow-md w-96 p-8">
        <h1 className="mb-4 text-2xl text-gray-700 font-medium">新規登録</h1>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium w-full p-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="mt-1 border-2 rounded-md w-full p-2"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium w-full p-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 border-2 rounded-md w-full p-2"
          />
        </div>
        <div className="flex justify-end mt-5">
          <Button text="新規登録" />
        </div>
        <div>
          <span className='text-gray-600 text-sm'>既にアカウントをお持ちですか？</span>
          <button className='text-blue-500 text-sm font-bold ml-1 hover:text-blue-700'>ログインページへ</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
