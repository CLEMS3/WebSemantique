"use client";

import { useParams } from 'next/navigation';
import React from 'react';

export default function CountryRoot() {
//   const params = useParams();
//   const name = params.name; // Access the dynamic "name" parameter

//   if (!name) {
//     return <p>Loading...</p>;
//   }

  return (
    <div className="h-full">
      <h1>Country Page</h1>
      <p>Country Name: </p>
    </div>
  );
}
