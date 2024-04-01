import React from 'react';
import Header from './Header';
import Footer from './Footer';

function WantToHelp() {
    return (
        <div>
            <Header />
            <main className="p-6">
                <p>All volunteering is currently running through the United Way of Logan County. Find out how you can help <a href="https://www.uwlogan.org/indian-lake-tornado-community-response">HERE.</a></p>
            </main>
            <Footer />
        </div>
    );
}

export default WantToHelp;