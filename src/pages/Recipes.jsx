// RecipesPage.js

import React from 'react';
import RecipeBar from '../components/Recipes/RecipeBar';
import CountryCards from '../components/Recipes/CountryCards';
import Sidebar from '../components/Recipes/Sidebar';

const Recipes = () => {
  return (
    <div className="w-screen min-h-screen">
      {/* Header */}
     <RecipeBar/>
    
      {/* Main Content */}
      <div className=" mt-20 ">
        <CountryCards countries={areas}/>
      </div>
      <div className='flex mt-40'>
            <div>
                <Sidebar recipes={meals}/>
            </div>
      </div>
    </div>
  );
};

export default Recipes;




const areas =  [
    {
      "strArea": "American",
      Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4ld-Oz3CKICvofeyLdSEevi3ZZXOexahLA&usqp=CAU"
    },
    {
      "strArea": "British",
      Image : "https://www.planetware.com/photos-large/ENG/england-stonehenge.jpg "
    },
    {
      "strArea": "Canadian",
      Image : "https://assets-news.housing.com/news/wp-content/uploads/2022/10/07124006/Canada-tourist-places-to-visit-06.jpg "
    },
    {
      "strArea": "Chinese",
      Image : "https://nitsaholidays.in/uploads/blog/736290great-wall-of-china-1600x900.webp "
    },
    {
      "strArea": "Croatian",
      Image : "https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/places-to-visit-in-croatia-cover.jpg "
  
    },
    {
      "strArea": "Dutch",
      Image : "https://www.wideworldtrips.com/wp-content/uploads/2020/04/places-to-visit-in-the-netherlands-800x445.jpg "
  
    },
    {
      "strArea": "Egyptian",
      Image : "https://ihplb.b-cdn.net/wp-content/uploads/2017/02/giza-pyramids-700x430.jpg"
    },
    {
      "strArea": "Filipino",
      Image : "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/12/Hand-Luggage-Only-10-5.jpg?w=1600&ssl=1"
    },
    {
      "strArea": "French",
      Image : "https://ihplb.b-cdn.net/wp-content/uploads/2021/11/eifel-tower-736x430.jpg "
    },
    {
      "strArea": "Greek",
      Image : "https://img.traveltriangle.com/blog/wp-content/uploads/2016/01/places-to-visit-in-greece1.jpg "
    },
    {
      "strArea": "Indian",
      Image : "https://www.holidify.com/images/compressed/attractions/attr_1448.jpg"
    },
    {
      "strArea": "Irish",
      Image : "https://focus.independent.ie/thumbor/LlAOZtmUHS9dFYy_ncvirBZjFkc=/0x86:1500x913/1280x853/prod-mh-ireland/d2c9eab0-c07c-11ed-8973-0210609a3fe2.jpg "
    },
    {
      "strArea": "Italian",
      Image : "https://www.planetware.com/photos-large/I/italy-colosseum-day.jpg "
    },
    {
      "strArea": "Jamaican",
      Image : "https://img.traveltriangle.com/blog/wp-content/uploads/2019/07/cover-page-for-Places-To-Visit-In-Jamaica.jpg "
    },
    {
      "strArea": "Japanese",
      Image : "https://static.javatpoint.com/tourist-places/images/tourist-places-in-japan.jpg "
    },
    {
      "strArea": "Kenyan",
      Image : "https://www.thomascook.in/blog/wp-content/uploads/2018/04/kenya-lamu-e1522735910487.jpg "
    },
    {
      "strArea": "Malaysian",
      Image : "https://static2.tripoto.com/media/filter/nl/img/210609/TripDocument/1474116741_destination_for_malaysian_24343.jpg"
    },
    {
      "strArea": "Mexican",
      Image : "https://www.wideworldtrips.com/wp-content/uploads/2021/05/places-to-visit-in-mexico-city-800x445.jpg"
    },
    {
      "strArea": "Moroccan",
      Image : "https://www.planetware.com/wpimages/2021/08/morocco-top-attractions-marrakesh-medina.jpg"
    },
    {
      "strArea": "Polish",
      Image : "https://www.planetware.com/wpimages/2020/03/poland-best-places-to-visit-krakow.jpg"
    },
    {
      "strArea": "Portuguese",
      Image : "https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/portugal-star-trail.jpg"
    },
    {
      "strArea": "Russian",
      Image : "https://media.easemytrip.com/media/Blog/International/637007769287754861/6370077692877548617mbWum.jpg"
    },
    {
      "strArea": "Spanish",
      Image : "https://www.cuddlynest.com/blog/wp-content/uploads/2021/07/spain-tourist-attractions-seville-plaza-espana-2048x917.jpg"
    },
    {
      "strArea": "Thai",
      Image : "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/tourist-attractions-in-thailand.jpg"
    },
    {
      "strArea": "Tunisian",
      Image : "https://tourrom.com/wp-content/uploads/2019/05/El-Djem-tourist-attractions.jpg"
    },
    {
      "strArea": "Turkish",
      Image : "https://ihplb.b-cdn.net/wp-content/uploads/2021/11/izmir-750x430.jpg"
    },
    {
      "strArea": "Unknown",
    },
    {
      "strArea": "Vietnamese",
      Image : "https://www.tourmyindia.com/blog//wp-content/uploads/2018/02/Ho-Chi-Minh-City-1.jpg "
    }
  ]
  

    
    const  meals= [
          {
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
        ]

    
