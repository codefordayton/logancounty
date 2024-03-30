import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import WantToHelp from './WantToHelp';
import NeedHelp from './NeedHelp';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/want-to-help" element={<WantToHelp />} />
                <Route path="/need-help" element={<NeedHelp />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;