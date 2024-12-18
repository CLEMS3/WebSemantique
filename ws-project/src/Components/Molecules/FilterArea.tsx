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
        <fieldset className="flex items-start">
            <div className='pl-10'>
                <input type="checkbox" id="conflits" name="filter" defaultChecked />
                <label>conflits</label>
            </div>

            <div className='pl-10'>
                <input type="checkbox" id="personnalitée" name="filter"/>
                <label>personnalitée</label>
            </div>

            <div className='pl-10'>
                <input type="checkbox" id="forces armées" name="filter"/>
                <label>forces armées</label>
            </div>

            <div className='pl-10'>
                <input type="checkbox" id="pays" name="filter" />
                <label>pays</label>
            </div>
        </fieldset>

    );
};

export default FilterArea;