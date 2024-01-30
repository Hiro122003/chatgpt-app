import React from 'react';

export default function Loading() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center my-16 min-h-screen">
      <div className="h-20 w-20  animate-spin rounded-full border-t-4 border-orange-500"></div>
      <p className="text-xl">Loading...</p>
    </div>
  );
}
