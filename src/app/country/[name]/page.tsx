"use client";

import { useParams } from 'next/navigation';

import {CountryPage} from '../../../Components/Templates/CountryPage';

import React from 'react';
import NavBar from "@/Components/Templates/NavBar";
 
export default function CountryRoot() {
      const params = useParams();
      const name = Array.isArray(params.name) ? params.name[0] : params.name;

      if (!name) {
        return <p>Loading...</p>;
      }

 return (
    <div className="h-screen overflow-hidden bg-cover bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/1024px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg')]">
      <NavBar/>
      <div className="p-12 pb-20 h-full">
        <CountryPage nameParam={name}/>
      </div>
    </div>
  );
}

