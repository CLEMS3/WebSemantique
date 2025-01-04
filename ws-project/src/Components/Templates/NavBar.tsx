'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../../logo.png';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-[#DAD5C6] text-gray-800 shadow-md w-screen">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-bold">
            <Link href="/"><Image alt="logo" style={{ width: 50 }} src={logo} /></Link>
        </div>
      </div>
    </nav>
    );
};

export default NavBar;