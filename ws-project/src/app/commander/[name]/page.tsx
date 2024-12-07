"use client";

import { useParams } from 'next/navigation';
import React from 'react';

export default function CommanderRoot() {
//   const params = useParams();
//   const name = params.name; // Access the dynamic "name" parameter

//   if (!name) {
//     return <p>Loading...</p>;
//   }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Commander Page</h1>
      <p>Commander Name: </p>
    </div>
  );
}
