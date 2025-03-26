import { useCallback, useEffect, useState } from "react";

import "./App.css";
import RecipeSearchForm from "./components/recipe-search-form";
import MealManager from "./utils/meal-manager";
import SearchResult from "./components/search-result";

const mealManager = new MealManager();

function App() {
  const [recipeSearchString, setRecipeSearchString] = useState("");
  const [meals, setMeals] = useState([]);
  const [favoritedMeals, setFavoritedMeals] = useState([]);

  const fetchMeals = useCallback(() => {
    (async function () {
      setFavoritedMeals(
        await mealManager.fetchFavoriteMealsByName(recipeSearchString),
      );
      setMeals(await mealManager.fetchMealsByName(recipeSearchString));
    })();
  }, [recipeSearchString]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const onStarClicked = (mealId) => {
    MealManager.isMealFavorited(mealId)
      ? mealManager.unfavoriteMealId(mealId)
      : mealManager.favoriteMealId(mealId);
    fetchMeals();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Recipe Finder
      </h1>
      <RecipeSearchForm
        recipeSearchString={recipeSearchString}
        setRecipeSearchString={setRecipeSearchString}
      />
      {favoritedMeals && favoritedMeals.length > 0 && (
        <SearchResult
          heading={"Favorites"}
          meals={favoritedMeals}
          onStarClicked={onStarClicked}
        />
      )}
      {meals && meals.length > 0 && (
        <SearchResult
          heading={"Recipes"}
          meals={meals}
          onStarClicked={onStarClicked}
        />
      )}
    </div>
  );
}

export default App;
