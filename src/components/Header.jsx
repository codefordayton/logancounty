import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-blue-500 text-white p-6">
            <h1 className="text-4xl">Logan County Recovery</h1>
            <nav>
                <NavLink to="/" end className={({ isActive }) =>
                    isActive ? 'text-white mx-4 hover:text-yellow-300 underline' : 'text-white mx-2 hover:text-yellow-300'
                }>Home</NavLink>
                <NavLink to="/want-to-help" className={({ isActive }) =>
                    isActive ? 'text-white mx-4 hover:text-yellow-300 underline' : 'text-white mx-2 hover:text-yellow-300'
                }>Volunteers</NavLink>
                <NavLink to="/need-help" className={({ isActive }) =>
                    isActive ? 'text-white mx-4 hover:text-yellow-300 underline' : 'text-white mx-2 hover:text-yellow-300'
                }>Need Help</NavLink>
            </nav>
        </header>
    );
}

export default Header;