import React, { useEffect, useState} from "react";
import Recipe from "./Recipe"
import './App.css';

const App = () => {
  const APP_ID = 'e0b8cf75';
  const APP_KEY = '716debbc98658598a8f8426b18eb4c30';

  const [recipes, setRecipes] = useState([]);



useEffect(async () => {
getRecipes();
}, []);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);

}
  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button className='search-button' type='submit'>
        Search
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe title= {recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image}

        />

      ))};
    </div>
  );

}

export default App;
