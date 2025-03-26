class Meal {
  constructor(data) {
    this.id = data.idMeal;
    this.name = data.strMeal;
    this.category = data.strCategory;
    this.cuisine = data.strArea;
    this.image = data.strMealThumb;
  }

  mealIsFavorited = () => {
    return MealManager.isMealFavorited(this.id);
  };
}

class MealManager {
  async fetchMealsByName(recipeName) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`,
    );
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    const meals = data.meals ? data.meals.map((meal) => new Meal(meal)) : [];
    return meals.filter((meal) => !MealManager.isMealFavorited(meal.id));
  }

  async fetchFavoriteMealsByName(recipeName) {
    const mealIds = this.getFavoritedMealIds();
    if (!mealIds || mealIds.length <= 0) return;

    let favoriteMeals = [];

    for (let id of mealIds) {
      const meal = await this.fetchMealById(id);
      if (meal) {
        favoriteMeals.push(meal);
      }
    }

    return favoriteMeals.filter((meal) =>
      meal.name.toLowerCase().includes(recipeName.toLowerCase()),
    );
  }

  async fetchMealById(mealId) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    );
    const data = await response.json();
    return new Meal(data.meals[0]);
  }

  getFavoritedMealIds() {
    let storedIds = localStorage.getItem("mealIds");
    if (storedIds) {
      storedIds = JSON.parse(storedIds);
      return storedIds ? storedIds : [];
    }
    return [];
  }

  favoriteMealId(mealId) {
    if (MealManager.isMealFavorited(mealId)) return;
    const mealIds = this.getFavoritedMealIds();
    mealIds.push(mealId);
    localStorage.setItem("mealIds", JSON.stringify(mealIds));
  }

  unfavoriteMealId(mealId) {
    if (MealManager.isMealFavorited(mealId)) {
      localStorage.setItem(
        "mealIds",
        JSON.stringify(
          this.getFavoritedMealIds().filter((id) => id !== mealId),
        ),
      );
      return true;
    }
  }

  static isMealFavorited(mealId) {
    let storedIds = localStorage.getItem("mealIds");
    storedIds = storedIds ? JSON.parse(storedIds) : [];
    return storedIds.includes(mealId);
  }
}

export default MealManager;
