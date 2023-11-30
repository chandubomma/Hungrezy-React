import React from 'react';
import Sidebar from '../components/Recipes/Sidebar';


const recipe =  {
    "idMeal": "52835",
    "strMeal": "Fettucine alfredo",
    "strDrinkAlternate": null,
    "strCategory": "Pasta",
    "strArea": "Italian",
    "strInstructions": "In a medium saucepan, stir the clotted cream, butter and cornflour over a low-ish heat and bring to a low simmer. Turn off the heat and keep warm.\r\nMeanwhile, put the cheese and nutmeg in a small bowl and add a good grinding of black pepper, then stir everything together (don’t add any salt at this stage).\r\nPut the pasta in another pan with 2 tsp salt, pour over some boiling water and cook following pack instructions (usually 3-4 mins). When cooked, scoop some of the cooking water into a heatproof jug or mug and drain the pasta, but not too thoroughly.\r\nAdd the pasta to the pan with the clotted cream mixture, then sprinkle over the cheese and gently fold everything together over a low heat using a rubber spatula. When combined, splash in 3 tbsp of the cooking water. At first, the pasta will look wet and sloppy: keep stirring until the water is absorbed and the sauce is glossy. Check the seasoning before transferring to heated bowls. Sprinkle over some chives or parsley, then serve immediately.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
    "strTags": null,
    "strYoutube": "https://www.youtube.com/watch?v=FLEnwZvGzOE",
    "strIngredient1": "Clotted Cream",
    "strIngredient2": "Butter",
    "strIngredient3": "Corn Flour",
    "strIngredient4": "Parmesan Cheese",
    "strIngredient5": "Nutmeg",
    "strIngredient6": "Fettuccine",
    "strIngredient7": "Parsley",
    "strIngredient8": "",
    "strIngredient9": "",
    "strIngredient10": "",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": "",
    "strIngredient17": "",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "227g",
    "strMeasure2": "25g",
    "strMeasure3": "1 tsp ",
    "strMeasure4": "100g ",
    "strMeasure5": "Grated",
    "strMeasure6": "250g",
    "strMeasure7": "Chopped",
    "strMeasure8": "",
    "strMeasure9": "",
    "strMeasure10": "",
    "strMeasure11": "",
    "strMeasure12": "",
    "strMeasure13": "",
    "strMeasure14": "",
    "strMeasure15": "",
    "strMeasure16": "",
    "strMeasure17": "",
    "strMeasure18": "",
    "strMeasure19": "",
    "strMeasure20": "",
    "strSource": "https://www.bbcgoodfood.com/recipes/fettucine-alfredo",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
  }

  const RecipePage = () => {
   
  
    const {
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
      strSource,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      ...ingredients
    } = recipe;
  
    const ingredientsArray = [];

for (let i = 1; i <= 20; i++) {
  const measureKey = `strMeasure${i}`;
  const ingredientKey = `strIngredient${i}`;

  const measure = recipe[measureKey];
  const ingredient = recipe[ingredientKey];

  if (measure && ingredient) {
    ingredientsArray.push(`${measure} ${ingredient}`);
  }
}

  
    return (
      <div className="flex mt-40">
        <div className="mt-12">
          <Sidebar />
        </div>
  
        <div className="w-2/3 mx-auto my-8 bg-white rounded-lg overflow-hidden shadow-md p-6">
          <h1 className="text-3xl font-semibold mb-4">{strMeal}</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left column - Image and Ingredients */}
            <div>
              <img src={strMealThumb} alt={strMeal} className="w-full h-auto mb-4" />
  
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc ml-4">
                {ingredientsArray.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
                </ul>

            </div>
  
            {/* Right column - Instructions and additional details */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Instructions</h2>
              <p className="text-gray-700 mb-4">{strInstructions}</p>
  
              <div className="mb-4">
                <p>
                  <span className="font-semibold">Category:</span> {strCategory}
                </p>
                <p>
                  <span className="font-semibold">Area:</span> {strArea}
                </p>
                <p>
                  <span className="font-semibold">Tags:</span> {strTags || 'N/A'}
                </p>
              </div>
  
              <div className="mb-4">
                <p>
                  <span className="font-semibold">Video Recipe:</span>{' '}
                  <a href={strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    Watch Video
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Source:</span>{' '}
                  <a href={strSource} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {strSource}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RecipePage;