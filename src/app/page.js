
import CocktailCard from '../components/CocktailCard';

export default async function Home() {
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  const resJson = await response.json()
  const cocktail = resJson.drinks

console.log(cocktail)


  return (
    <>
  
      {/* Cocktail Card */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Cocktail Simple Receipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cocktail.map(cocktail => (
            <CocktailCard 
              key={cocktail.strDrink}
              Drink={cocktail.strDrink}
              Category={cocktail.strCategory}
              Ingredient1={cocktail.strIngredient1}
              Ingredient2={cocktail.strIngredient2}
              Instructions={cocktail.strInstructions}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cocktail.map(cocktail => (
            <CocktailCard 
              key={cocktail.strDrink}
              Drink={cocktail.strDrink}
              img="https://coffee.alexflipnote.dev/random"
              Category={cocktail.strCategory}
              Ingredient1={cocktail.strIngredient1}
              Ingredient2={cocktail.strIngredient2}
              Instructions={cocktail.strInstructions}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cocktail.map(cocktail => (
            <CocktailCard 
              key={cocktail.strDrink}
              Drink={cocktail.strDrink}
              img="https://coffee.alexflipnote.dev/random"
              Category={cocktail.strCategory}
              Ingredient1={cocktail.strIngredient1}
              Ingredient2={cocktail.strIngredient2}
              Instructions={cocktail.strInstructions}
            />
          ))}
        </div>
      </div>

    </>
  );
}