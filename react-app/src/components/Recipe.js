import React from 'react';

function Recipe({ recipe, deleteRecipe, setEditingMode, setRecipe }) {

    function renderIngredients(){
        return recipe.ingredients.map((ingredient, idx) => {
            return <li key={idx}>{ingredient}</li>

        });

    }
    function handleDelete(){
        deleteRecipe(parseInt(recipe.id, 10)) 
    }
    
    function handleEdit(){
        setEditingMode(true)
        setRecipe(recipe)
    }
    return (
        <div>
           <img src= {recipe.thumbnail} alt={recipe.title} />           
           <h2 >{recipe.title} </h2>
           <ul>
           {renderIngredients()}
           
           </ul>
           <button onClick={handleDelete} className="btn btn-primary"> Delete</button>
           <button onClick={handleEdit} className="btn btn-primary">Edit</button>
        </div>
    );
}

export default Recipe;

