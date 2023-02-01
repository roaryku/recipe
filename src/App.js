
import { useEffect } from 'react';
import './App.css';

function App(){
  const MY_ID = "df6f65fe";
  const MY_KEY = "afc456bb7ac227df48ba6ba00ca1f83e";

  

  useEffect(() => {
    const getNewRecipe = async () => {
    const responce = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}');
    const data = await responce.json();
    console.log(data)
  }
  getNewRecipe()
  })
  

  return(
    <div className='App'>
      <p>RECIPES</p>
    </div>
  )
  }





export default App;