"use client";

import { useParams } from 'next/navigation';
import {useState, useEffect} from 'react';
import {BattlePage} from '../../../Components/Templates/BattlePage';
import NavBar from "@/Components/Templates/NavBar";
 
export default function BattleRoot() {
      const params = useParams();
      const name = params.name; // Access the dynamic "name" parameter

      if (!name) {
        return <p>Loading...</p>;
      }
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="h-screen overflow-hidden bg-cover bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/1024px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg')]">
            <NavBar/>
            <div className="p-12 pb-20 h-full">
                <BattlePage/>
            </div>
        </div>
    );
}

