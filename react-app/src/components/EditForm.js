import { useState} from "react";
import React from 'react'

function EditForm({ recipe, editRecipe }) {
     const [formData, setFormData] = useState({
        thumbnail:recipe.thumbnail,
        title:recipe.title,
        ingredients:recipe.ingredients,

     });
     const ingredientsString= formData.ingredients.join(",")
     function handleOnChange(e) {
         let ingredientsList=[]
         if (e.target.name === "ingredients"){
             ingredientsList=e.target.value.split(",")
             setFormData({...formData, [e.target.name]:ingredientsList})
         } else { 
             setFormData({...formData, [e.target.name]:e.target.value})
         }
         
     }
     function handleFormSubmission(e){
         e.preventDefault()
         editRecipe(formData, parseInt(recipe.id, 10))
         setFormData({
            thumbnail:"",
            title: "",
            ingredients: [],
    
         });

     }

    return (
        <div>
           <form onSubmit={handleFormSubmission}>
            <label>
             Name:
             <input type="text" name="title" value={formData.title} onChange={handleOnChange}/>
           </label>
           <label>
             Image:
             <input type="text" name="thumbnail" value={formData.thumbnail} onChange={handleOnChange}/>
           </label>
           <label>
             Ingredients: Separate each ingredient with a comma 
             <input type="text" name="ingredients" value={ingredientsString} onChange={handleOnChange}/>
           </label>
          <input type="submit" value="Submit"  />
        </form> 
        </div>
    );
}

export default EditForm;
