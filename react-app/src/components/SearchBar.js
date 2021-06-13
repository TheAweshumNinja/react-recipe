import { useHistory } from "react-router-dom";
import { useState } from "react";

function SearchBar ({ searchQuery, setSearchQuery}) {
    const history= useHistory ();
    const onSubmit= (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };
    return (
        <form 
        action="/"
        method="get"
        autoComplete="off"
        onSubmit={onSubmit}
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search Recipes
                </span>
            </label>
            <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search Recipes"
            name="s"
            />
        </form>
    );
};

export default SearchBar;