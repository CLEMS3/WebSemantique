'use client'

import React, { useEffect, useState } from 'react';
import SearchBar from '../Molecules/SearchBar';
import { Checkbox } from '../Atoms/Checkbox';
import { fetchSearchWar, fetchSearchPersonality } from '@/Services/apiService';

interface Suggestion {
  label: string;
  image: string;
}

export const SearchArea = () => {
  const [suggestions, setSuggestions] = useState<{ [key: string]: Suggestion[] }>({});

  const [searchConflict, setSearchConflict] = useState<boolean>(true);
  const [searchPersonalities, setSearchPersonalities] = useState<boolean>(true);
  const [searchCountries, setSearchCountries] = useState<boolean>(true);

  const [query, setQuery] = React.useState("");

  useEffect(() => {
    const search = async () => {
      const newSuggestions: { [key: string]: Suggestion[] } = {};

      // Effectuer les requêtes conditionnellement en fonction des cases cochées
      if (searchConflict) {
        const warData = await fetchSearchWar(query);
        newSuggestions["Guerre"] = warData;
      }

      if (searchPersonalities) {
        const personalityData = await fetchSearchPersonality(query);
        newSuggestions["Commandants"] = personalityData;
      }

      if (searchCountries) {
        newSuggestions["Pays"] = [
          { label: "France", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Armoiries_r%C3%A9publique_fran%C3%A7aise.svg/132px-Armoiries_r%C3%A9publique_fran%C3%A7aise.svg.png" },
          { label: "Allemagne", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Germany.svg/132px-Coat_of_arms_of_Germany.svg.png" },
          { label: "Italie", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Emblem_of_Italy.svg/132px-Emblem_of_Italy.svg.png" },
          { label: "Espagne", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Escudo_de_Espa%C3%B1a_%28mazonado%29.svg/132px-Escudo_de_Espa%C3%B1a_%28mazonado%29.svg.png" }
        ];
      }

      setSuggestions(newSuggestions);
      console.log(newSuggestions);
    };

    // Exécuter `search` uniquement si une case est cochée
    if (query) {
      search();
    }
  }, [query, searchConflict, searchPersonalities, searchCountries]);

  return (
    <div
      className="flex flex-col items-center justify-start"
      style={{
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        width: "80vw",
        height: "80vh",
        borderRadius: "30px",
      }}
    >
      <div className="flex space-x-4 mb-4 mt-10">
        <Checkbox name="conflicts" checked={searchConflict} setChecked={setSearchConflict} label='Conflit' />
        <Checkbox name="personalities" checked={searchPersonalities} setChecked={setSearchPersonalities} label='Personnalités' />
        <Checkbox name="countries" checked={searchCountries} setChecked={setSearchCountries} label='Pays' />
      </div>

      <SearchBar onSearch={(query: string) => console.log(query)} suggestions={suggestions} query={query} setQuery={setQuery} />
    </div>
  );
};

export default SearchArea;
