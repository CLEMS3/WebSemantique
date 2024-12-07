'use client'

import React, { useState } from 'react';
import FilterArea from '../Molecules/FilterArea';
import SearchBar from '../Molecules/SearchBar';


export const SearchArea = () => {
    const [query, setQuery] = useState('');
    const [filters, setFilters] = useState({});
  
    // Update search query
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    };
  
    // Update filters
    const handleFilterChange = (key: string, value: any) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [key]: value,
      }));
    };
  
    return (
      <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
        <h2>Search and Filter</h2>
        <SearchBar query={query} onSearchChange={handleSearchChange} />
        <FilterArea filters={filters} onFilterChange={handleFilterChange} />
        <div style={{ marginTop: '1rem' }}>
          <strong>Search Query:</strong> {query}
          <br />
          <strong>Filters:</strong> {JSON.stringify(filters)}
        </div>
        <button onClick={() => console.log(`Search clicked with filters ${JSON.stringify(filters)} and query ${query}`)}>Search</button>
      </div>
    );
  };

export default SearchArea;