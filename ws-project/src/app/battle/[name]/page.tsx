"use client";

import { useParams } from 'next/navigation';
import {useState, useEffect} from 'react';
import { fetchCatFact } from '../../../Services/apiService';
import {BattlePage} from '../../../Components/Templates/BattlePage';
 
export default function BattleRoot() {
      const params = useParams();
      const name = params.name; // Access the dynamic "name" parameter

      if (!name) {
        return <p>Loading...</p>;
      }
    const [catFact, setCatFact] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const getCatFact = async () => {
            try {
                const data = await fetchCatFact();
                setCatFact(data.fact);
            } catch (err) {
                setError("Failed to load cat fact");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getCatFact();
    }, []);

    return (
        <div className="h-full">
            <h1>Battle Page</h1>
            <p>Battle Name: {name}</p>
            <BattlePage/>
        </div>
    );
}

