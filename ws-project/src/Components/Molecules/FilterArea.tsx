import React, { ChangeEvent } from 'react';

interface FilterAreaProps {
    filters: {
        category?: string;
        price?: string;
    };
    onFilterChange: (name: string, value: string) => void;
}

const FilterArea: React.FC<FilterAreaProps> = ({ filters, onFilterChange }) => {
    const handleInputChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        onFilterChange(name, value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>
                Category:
                <select
                    name="category"
                    value={filters.category || ''}
                    onChange={handleInputChange}
                    style={{ marginLeft: '0.5rem' }}
                >
                    <option value="">All</option>
                    <option value="books">Books</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                </select>
            </label>
            <label>
                Price Range:
                <input
                    type="text"
                    name="price"
                    value={filters.price || ''}
                    onChange={handleInputChange}
                    placeholder="e.g., 10-50"
                    style={{ marginLeft: '0.5rem' }}
                />
            </label>
        </div>
    );
};

export default FilterArea;