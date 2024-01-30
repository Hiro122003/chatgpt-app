'use client';

import Button from '@/app/components/button';
import { Inputs } from '@/app/utils/type';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { auth } from '../../../../firebase';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {

    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user, 'userCrendential in register');
        router.push('/auth/login');
      })
      .catch((error) => {
        // console.log(error);
        if(error.code ==='auth/email-already-in-use'){
          alert('既に登録されているメールアドレスです。');
        }else{
          alert('不適切なメールアドレスです。');
        }
      });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-md shadow-md w-96 p-8"
      >
        <h1 className="mb-4 text-2xl text-gray-700 font-medium">新規登録</h1>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium w-full p-2"
          >
            Email
          </label>
          <input
            {...register('email', {
              required: 'メールアドレスは必須です。',
              pattern: {
                value:
                  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                message: '不適切なメールアドレスです。',
              },
            })}
            type="text"
            id="email"
            className="mt-1 border-2 rounded-md w-full p-2"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium w-full p-2"
          >
            Password
          </label>
          <input
            {...register('password', {
              required: 'パスワードは必須です。',
              minLength: {
                value: 6,
                message: '6文字以上入力してください。',
              },
            })}
            type="password"
            id="password"
            className="mt-1 border-2 rounded-md w-full p-2"
          />
          {errors.password && (
            <span className="text-red-600 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex justify-end mt-5">
          <Button text="新規登録" />
        </div>
        <div>
          <span className="text-gray-600 text-sm">
            既にアカウントをお持ちですか？
          </span>
          <Link
            href={'/auth/login'}
            className="text-blue-500 text-sm font-bold ml-1 hover:text-blue-700"
          >
            ログインページへ
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
