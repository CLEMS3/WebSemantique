'use client'

import React, { useState } from 'react';


const Filter: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const onSearch = (searchTerm: string, filter: string) => {
        console.log(`Searching for ${searchTerm} with filter ${filter}`);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchTerm, filter);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
            />
            <select value={filter} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="filter1">Filter 1</option>
                <option value="filter2">Filter 2</option>
                <option value="filter3">Filter 3</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
};

export default Filter;