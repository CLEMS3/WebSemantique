"use client";

import { useParams } from 'next/navigation';
import {useState, useEffect} from 'react';
import { fetchAWarData } from '../../../Services/apiService';
import { fetchCatFact } from '../../../Services/apiService';
import {WarPage} from '../../../Components/Templates/WarPage';
import NavBar from "@/Components/Templates/NavBar";

export default function CommanderRoot() {
      const params = useParams();
      const name = params.name; // Access the dynamic "name" parameter


      if (!name) {
        return <p>Loading...</p>;
      }
    const [sparqlResult, setSparqlResult] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const getSparqlResult = async () => {
            try {
                const data = await fetchAWarData();
                console.log(data);
                setSparqlResult(JSON.stringify(data));
            } catch (err) {
                setError("Failed to load cat fact");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getSparqlResult();
    }, []);

    return (
        <div className="h-screen overflow-hidden bg-cover bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/1024px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg')]">
            <NavBar/>
            <div className="p-12 pb-20 h-full">
                <WarPage/>
            </div>
        </div>
    );
}

