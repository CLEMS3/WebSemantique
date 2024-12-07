'use client'

import React from 'react';
import SearchArea from '../Organisms/SearchArea';
import HomeTitle from '../Molecules/HomeTitle';

const HomePage: React.FC = () => {
    return (
        <div>
            <HomeTitle />
            <SearchArea />
        </div>
    );
};

export default HomePage;