'use client'

import React, { useEffect, useState } from 'react';
import SearchBar from '../Molecules/SearchBar';
import { Checkbox } from '../Atoms/Checkbox';

import { fetchSearchWar, fetchSearchPlace, fetchSearchPersonality } from '@/Services/apiService';

interface Suggestion {
  label: string;
  image: string
  url: string;
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
        newSuggestions["Conflit"] = warData;
      }

      if (searchPersonalities) {
        const personalityData = await fetchSearchPersonality(query);
        newSuggestions["Personnalité"] = personalityData;
      }

      if (searchCountries) {
       const dataPlace = await fetchSearchPlace(query);
        newSuggestions["Lieu"] = dataPlace;
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
        <Checkbox name="countries" checked={searchCountries} setChecked={setSearchCountries} label='Lieux' />
      </div>

      <SearchBar onSearch={(query: string) => console.log(query)} suggestions={suggestions} query={query} setQuery={setQuery} />
    </div>
  );
};

export default SearchArea;
