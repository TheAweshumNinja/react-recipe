import { useHistory } from "react-router-dom";
import { useState } from "react";

function SearchBar ({ searchQuery, setSearchQuery}) {
    
   function onChange(e) {
       setSearchQuery(e.target.value)

   };
   
    return (
        <form>
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search Recipes
                </span>
            </label>
            <input
            value={searchQuery}
            onChange={onChange}
            type="text"
            id="header-search"
            placeholder="Search Recipes"
            name="s"
            />
        </form>
    );
};

export default SearchBar;