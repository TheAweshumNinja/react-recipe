import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Recipe from "./Recipe";

function RecipeContainer() {
    const [ recipeList , setRecipeList] = useState(null);
    const [ searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch("https://phase-2-project-json.herokuapp.com/results")
        .then((res) => res.json())
        .then(setRecipeList)
        
    }, []);

    function renderRecipes(){
       let filteredRecipeList= [...recipeList];
        if (searchText !== ""  ){
            filteredRecipeList=filteredRecipeList.filter(recipe => {
                return recipe.title.toLowerCase().includes(searchText.toLowerCase())
            });
        }
        return filteredRecipeList.map(recipe => {
            return <Recipe recipe={recipe} key={recipe.id}/>
        });

    }
    return(
        <div>
            <SearchBar searchQuery={searchText} setSearchQuery={setSearchText} />
            {recipeList && renderRecipes()}
        </div>

    );

}

export default RecipeContainer;