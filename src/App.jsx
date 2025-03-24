import { useCallback, useEffect, useState } from "react";
import "./App.css";
import RecipeSearchForm from "./components/recipe-search-form";
import Meals from "./components/meals";
import MealIdStorage from "./utils/meal-id-storage";

class Meal {
  constructor(data) {
    this.id = data.idMeal;
    this.name = data.strMeal;
    this.category = data.strCategory;
    this.cuisine = data.strArea;
    this.image = data.strMealThumb;
  }

  mealIsFavorited = () => {
    return MealIdStorage.getMealIds().includes(this.id);
  };
}

function App() {
  const [recipeSearchString, setRecipeSearchString] = useState("");
  const [meals, setMeals] = useState([]);
  const [toggle, setToggle] = useState();

  const fetchMeals = useCallback(() => {
    (async function () {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeSearchString}`,
      );
      const data = await response.json();
      setMeals(data.meals ? data.meals.map((meal) => new Meal(meal)) : []);
    })();
  }, [recipeSearchString]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const onStarClicked = (mealId) => {
    if (!mealId) return;
    if (!MealIdStorage.removeMealId(mealId)) {
      MealIdStorage.addMealId(mealId);
    }
    setToggle(!toggle);
  };

  const onRecipeSearch = (e) => {
    e.preventDefault();
    fetchMeals();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Recipe Finder
      </h1>
      <RecipeSearchForm
        onRecipeSearch={onRecipeSearch}
        recipeSearchString={recipeSearchString}
        setRecipeSearchString={setRecipeSearchString}
      />
      <Meals meals={meals} onStarClicked={onStarClicked} />
    </div>
  );
}

export default App;
