import React from 'react';

function Recipe({ recipe }) {

    function renderIngredients(){
        return recipe.ingredients.map((ingredient, idx) => {
            return <li key={idx}>{ingredient}</li>

        });

    }
    return (
        <div>
           <img src= {recipe.thumbnail} />           
           <h2 >{recipe.title} </h2>
           <ul>
           {renderIngredients()}
           
           </ul>
           
        </div>
    );
}

export default Recipe;

