import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <span className="text-white text-xl">Centered Text</span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;