import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-blue-500 text-white p-6">
            <img src="logo-placeholder.png" alt="Logo" className="h-12 w-auto" />
            <h1 className="text-4xl">Logan County Recovery</h1>
            <nav>
                <NavLink to="/" exact className="text-white mx-2 hover:text-yellow-300" activeClassName="underline">Home</NavLink>
                <NavLink to="/want-to-help" className="text-white mx-2 hover:text-yellow-300" activeClassName="underline">Want to Help</NavLink>
                <NavLink to="/need-help" className="text-white mx-2 hover:text-yellow-300" activeClassName="underline">Need Help</NavLink>
            </nav>
        </header>
    );
}

export default Header;