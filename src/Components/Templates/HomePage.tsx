'use client'

import React from 'react';
import SearchArea from '../Organisms/SearchArea';

const HomePage: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <SearchArea />
        </div>
    );
};

export default HomePage;