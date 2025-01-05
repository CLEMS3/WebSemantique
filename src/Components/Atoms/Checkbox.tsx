'use client';

import React from 'react';

interface CheckboxProps {
    name: string;
    checked: boolean;
    setChecked: (checked: boolean) => void;
    label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, checked, setChecked, label }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <label>
            <input
                type="checkbox"
                name={name}
                value={label}
                checked={checked}
                onChange={handleChange}
            />
            {label}
        </label>
    );
};

export default Checkbox;