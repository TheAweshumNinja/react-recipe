import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Recipe from "./Recipe";
import RecipeForm from "./RecipeForm";
import EditForm from "./EditForm";

function RecipeContainer() {
    const [ recipeList , setRecipeList] = useState(null);
    const [ searchText, setSearchText] = useState("");
    const [ toggleForm, setToggleForm]= useState(false);
    const [ editingMode, setEditingMode] = useState(false);
    const [ editingRecipe, setEditingRecipe] = useState(null)
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
            return <Recipe recipe={recipe} key={recipe.id} deleteRecipe={deleteRecipe} setEditingMode={setEditingMode} setRecipe={setEditingRecipe}/>
        });

    }
    function displayForm(){
        setToggleForm(!toggleForm)

    }
    function addNewRecipe(formData){
        fetch("https://phase-2-project-json.herokuapp.com/results", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setRecipeList([...recipeList, data ])
        })
        
    }
    function deleteRecipe(id){
        console.log(id)
        fetch(`https://phase-2-project-json.herokuapp.com/results/${id}`, {
            method:"DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            const updatedRecipeList= recipeList.filter((recipe) => {
                return recipe.id !== id
            })
            setRecipeList(updatedRecipeList)
        })


    }
    function editRecipe(formData, id){
        fetch(`https://phase-2-project-json.herokuapp.com/results/${id}`, {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const updatedRecipeList= recipeList.map((recipe) => {
                if (recipe.id === id) return data
                return recipe
            })
            setEditingMode(false)
            setEditingRecipe(null)
            setRecipeList(updatedRecipeList)
        })
    }
        
    return(
        <div className= "container">
            <SearchBar searchQuery={searchText} setSearchQuery={setSearchText} />
            <button onClick={displayForm} className="btn btn-primary">Add New Recipe</button>
            {toggleForm && <RecipeForm addNewRecipe={addNewRecipe}/>}
            {editingMode && <EditForm recipe={editingRecipe} editRecipe={editRecipe} />}
            {recipeList && renderRecipes()}
        </div>

    );

}

export default RecipeContainer;