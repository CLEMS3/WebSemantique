'use client'

import React, { useEffect, useState } from 'react';
import SearchBar from '../Molecules/SearchBar';
import { Checkbox } from '../Atoms/Checkbox';
import { fetchSearchWar, fetchSearchPlace } from '@/Services/apiService';

interface Suggestion {
  label: string;
  image: string
  url: string;
}



export const SearchArea = () => {

  const [suggestions, setSuggestions] = useState<{ [key: string]: Suggestion[] }>({});

  const [searchConflict, setSearchConflict] = useState<boolean>(true);
  const [searchPersonalities, setSearchPersonalities] = useState<boolean>(true);
  const [searchWar, setSearchWar] = useState<boolean>(true);
  const [searchCountries, setSearchCountries] = useState<boolean>(true);

  const [query, setQuery] = React.useState("");

  useEffect(() => {
    const search = async () => {
      const dataBataille = await fetchSearchWar(query);
      const dataPlace = await fetchSearchPlace(query);
      setSuggestions({
        "Guerre": dataBataille,
        "Commandants": [
          { label: "Jules César", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg/1024px-Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg", url: "https://fr.wikipedia.org/wiki/Jules_C%C3%A9sar" },
          { label: "Vercingétorix", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Vercing%C3%A9torix_stat%C3%A8re_Gallica_avers.jpg/1280px-Vercing%C3%A9torix_stat%C3%A8re_Gallica_avers.jpg", url: "https://fr.wikipedia.org/wiki/Vercing%C3%A9torix" }
        ],
        "Pays": dataPlace
      });
      console.log(suggestions);
      console.log(dataPlace);
      console.log(dataBataille);
    };
    search();

  }, [query]);

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
        <Checkbox name="conflicts" checked={searchConflict} setChecked={setSearchConflict} label='Bataille' />
        <Checkbox name="personalities" checked={searchPersonalities} setChecked={setSearchPersonalities} label='Personnalités' />
        <Checkbox name="armedForces" checked={searchWar} setChecked={setSearchWar} label='Guerre' />
        <Checkbox name="countries" checked={searchCountries} setChecked={setSearchCountries} label='Pays' />
      </div>

      <SearchBar onSearch={(query: string) => console.log(query)} suggestions={suggestions} query={query} setQuery={setQuery} />


    </div>

  );


};

export default SearchArea;
