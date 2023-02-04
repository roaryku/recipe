import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';


function App(){
  const MY_ID = "df6f65fe";
  const MY_KEY = "afc456bb7ac227df48ba6ba00ca1f83e";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado');

  useEffect(() => {
    const getNewRecipe = async () => {
    const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await responce.json();
    setMyRecipes(data.hits)
  }
  getNewRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    console.log(e.target.value)
  setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }
  

  return(
    <div className="App">
    <div className="container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>

      <h1>Find a Recipe</h1>
  </div>

    <div className='container'>
      <form onSubmit={finalSearch}>
        <input className='search' placeholder='search...' onChange={myRecipeSearch} value={mySearch}>
        </input>
      </form>
      </div>
      
      

      <div className='container'>
        <button>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" className="icons" alt="food"/>
        </button>
    </div>
    
    

      <div>
        {myRecipes.map(element => (
          <MyRecipesComponent 
          label={element.recipe.label}
          image={element.recipe.image} 
          calories={element.recipe.calories} 
          ingredients={element.recipe.ingredientLines}/>
        ))}
        </div>
    </div>

  
  )
  }





export default App;