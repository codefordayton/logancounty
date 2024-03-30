import React from 'react';
import Header from './Header';
import Footer from './Footer';

function WantToHelp() {
    return (
        <div>
            <Header />
            <main className="p-6">
                <p>Here you can provide more detailed information about how people can help with the recovery efforts, whether through physical volunteering, remote phone support, or financial support.</p>
            </main>
            <Footer />
        </div>
    );
}

export default WantToHelp;