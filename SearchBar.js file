SearchBar.js file
---------------------------------------
// SearchBar.js

import React, { useState } from 'react';
import './SearchBar.css'; // Import the styles

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            onSearch(searchTerm);
        }
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search on Google"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
