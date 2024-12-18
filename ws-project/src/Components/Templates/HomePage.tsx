'use client'

import React from 'react';
import SearchArea from '../Organisms/SearchArea';
import HomeTitle from '../Molecules/HomeTitle';

const HomePage: React.FC = () => {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center'>
            <SearchArea />
        </div>
    );
};

export default HomePage;