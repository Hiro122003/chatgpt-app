'use client'

import React from 'react';
import { useForm } from 'react-hook-form';

const TestComponent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TestComponent;