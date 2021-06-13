import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

function RecipeContainer() {
    const [ recipeList , setRecipeList] = useState(null);
    const [ searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch("https://phase-2-project-json.herokuapp.com/results")
        .then((res) => res.json())
        .then(setRecipeList)
        
    }, []);
    return(
        <div>
            <SearchBar />
        </div>

    );

}

export default RecipeContainer;