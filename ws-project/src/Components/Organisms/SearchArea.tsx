'use client'

import React, { useEffect, useState } from 'react';
import SearchBar from '../Molecules/SearchBar';
import { Checkbox } from '../Atoms/Checkbox';
import { fetchSearchWar } from '@/Services/apiService';

interface Suggestion {
  label: string;
  image: string;
}



export const SearchArea = () => {

  const [suggestions, setSuggestions] = useState<{ [key: string]: Suggestion[] }>({});

  const [searchConflict, setSearchConflict] = useState<boolean>(false);
  const [searchPersonalities, setSearchPersonalities] = useState<boolean>(false);
  const [searchArmedForces, setSearchArmedForces] = useState<boolean>(false);
  const [searchCountries, setSearchCountries] = useState<boolean>(false);

  const [query, setQuery] = React.useState("");

  useEffect(() => {
    const search = async () => {
      const data = await fetchSearchWar(query);
      setSuggestions( {
        "Guerre": data,
        "Commandants": [
          { label: "Jules César", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg/1024px-Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg" },
          { label: "Vercingétorix", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Vercing%C3%A9torix_stat%C3%A8re_Gallica_avers.jpg/1280px-Vercing%C3%A9torix_stat%C3%A8re_Gallica_avers.jpg" }
        ],
        "Pays": [
          { label: "France", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Armoiries_r%C3%A9publique_fran%C3%A7aise.svg/132px-Armoiries_r%C3%A9publique_fran%C3%A7aise.svg.png" },
          { label: "Allemagne", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Germany.svg/132px-Coat_of_arms_of_Germany.svg.png" },
          { label: "Italie", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Emblem_of_Italy.svg/132px-Emblem_of_Italy.svg.png" },
          { label: "Espagne", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Escudo_de_Espa%C3%B1a_%28mazonado%29.svg/132px-Escudo_de_Espa%C3%B1a_%28mazonado%29.svg.png" }
        ]
      });
      console.log(suggestions);
      console.log(data);
    };
    search();

  }, [query]);
 
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
<div className="flex space-x-4 mb-4">
  <Checkbox name="conflicts" checked={searchConflict} setChecked={setSearchConflict} label='Conflits' />
  <Checkbox name="personalities" checked={searchPersonalities} setChecked={setSearchPersonalities} label='Personnalités' />
  <Checkbox name="armedForces" checked={searchArmedForces} setChecked={setSearchArmedForces} label='Forces armées' />
  <Checkbox name="countries" checked={searchCountries} setChecked={setSearchCountries} label='Pays' />
</div>

 <SearchBar onSearch={(query: string) => console.log(query)} suggestions={suggestions} query={query} setQuery={setQuery}/>
    

</div>

  );


};

export default SearchArea;
