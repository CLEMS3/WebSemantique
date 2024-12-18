'use client'

import React, { useEffect, useState } from 'react';
import SearchBar from '../Molecules/SearchBar';
import { Checkbox } from '../Atoms/Checkbox';

interface Suggestion {
  name: string;
  image: string;
}



export const SearchArea = () => {

  const suggestions: { [key: string]: Suggestion[] } = {
    "Guerre": [
      { name: "Guerre des Gaules", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Caesar_campaigns_gaul-fr.svg/langfr-1280px-Caesar_campaigns_gaul-fr.svg.png" },
      { name: "Guerre de Troie", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/THAM-Battle_at_the_ships_sarcophagus.jpg/2560px-THAM-Battle_at_the_ships_sarcophagus.jpg" },
      { name: "Guerre de Cent Ans", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Hundred_years_war_collage.jpg/1280px-Hundred_years_war_collage.jpg" },
      { name: "Bataille de Verdun", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/French_trench_battle.jpg/1920px-French_trench_battle.jpg" }
    ],
    "Commandants": [
      { name: "Jules César", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg/1024px-Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg" },
      { name: "Vercingétorix", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Vercing%C3%A9torix_stat%C3%A8re_Gallica_avers.jpg/1280px-Vercing%C3%A9torix_stat%C3%A8re_Gallica_avers.jpg" }
    ],
    "Pays": [
      { name: "France", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Armoiries_r%C3%A9publique_fran%C3%A7aise.svg/132px-Armoiries_r%C3%A9publique_fran%C3%A7aise.svg.png" },
      { name: "Allemagne", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Germany.svg/132px-Coat_of_arms_of_Germany.svg.png" },
      { name: "Italie", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Emblem_of_Italy.svg/132px-Emblem_of_Italy.svg.png" },
      { name: "Espagne", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Escudo_de_Espa%C3%B1a_%28mazonado%29.svg/132px-Escudo_de_Espa%C3%B1a_%28mazonado%29.svg.png" }
    ]
  } as { [key: string]: Suggestion[] };

  const [searchConflict, setSearchConflict] = useState<boolean>(false);
  const [searchPersonalities, setSearchPersonalities] = useState<boolean>(false);
  const [searchArmedForces, setSearchArmedForces] = useState<boolean>(false);
  const [searchCountries, setSearchCountries] = useState<boolean>(false);

  const [query, setQuery] = React.useState("");
 
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
