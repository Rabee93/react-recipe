import React, { useEffect, useState} from "react";
import Recipe from "./Recipe"
import './App.css';

const App = () => {
  const APP_ID = 'e0b8cf75';
  const APP_KEY = '716debbc98658598a8f8426b18eb4c30';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')



useEffect(() => {
getRecipes();
}, [query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

};
const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search)

}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}
  return(
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={} />
        <button className='search-button' type='submit'>
        Search
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title= {recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}

        />

      ))};
    </div>
  );

}

export default App;
