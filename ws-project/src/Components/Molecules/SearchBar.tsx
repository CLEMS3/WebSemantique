import React, { ChangeEvent } from 'react';

interface SearchBarProps {
    query: string;
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearchChange }) => {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <input
                type="text"
                value={query}
                onChange={onSearchChange}
                placeholder="Search..."
                style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
            />
        </div>
    );
};

export default SearchBar;