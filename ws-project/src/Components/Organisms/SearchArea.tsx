'use client'

import React, { useEffect, useState } from 'react';
import SearchBar from '../Molecules/SearchBar';


export const SearchArea = () => {
 
  return (
    <div
  className="flex flex-col items-center justify-center"
  style={{
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "80vw",
    height: "80vh",
    borderRadius: "30px",
  }}
>

 <SearchBar onSearch={(query: string) => console.log(query)} suggestions={["Alésia", "Guerre de cents ans", "Guerre du golf", "Seconde guerre mondiale"]} />

</div>

  );


};

export default SearchArea;
