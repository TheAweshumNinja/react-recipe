import { useState} from "react";
import React from 'react'

function RecipeForm({ addNewRecipe}) {
     const [formData, setFormData] = useState({
        thumbnail:"",
        title: "",
        ingredients: [],

     });
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
         addNewRecipe(formData)
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
             <input type="text" name="ingredients" value={formData.ingredients} onChange={handleOnChange}/>
           </label>
          <input type="submit" value="Submit"  />
        </form> 
        </div>
    );
}

export default RecipeForm;

