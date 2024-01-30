import React from 'react';

const Button = ({ text }: { text: string }) => {
  return (
    <button className="rounded-lg bg-primary px-4 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ">
      {text}
    </button>
  );
};

export default Button;
