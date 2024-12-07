'use client'

import React from 'react';
import Filter from '../Organisms/Filter';
import HomeTitle from '../Molecules/HomeTitle';

const HomePage: React.FC = () => {
    return (
        <div>
            <HomeTitle />
            <Filter />
        </div>
    );
};

export default HomePage;