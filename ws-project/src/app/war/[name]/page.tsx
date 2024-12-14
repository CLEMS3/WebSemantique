"use client";

import { useParams } from 'next/navigation';
import {useState, useEffect} from 'react';
import { fetchAWarData } from '../../../Services/apiService';

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
                setSparqlResult(data?.stringify);
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
        <div className="h-full">
            <h1>War Page : {name}</h1>
            <p>War Name: {sparqlResult}</p>
        </div>
    );
}

