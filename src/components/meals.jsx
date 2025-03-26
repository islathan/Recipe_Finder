import MealManager from "../utils/meal-manager";
import Meal from "./meal";

const Meals = ({ meals, onStarClicked }) => {
  if (!meals) {
    return;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {meals.map((meal) => (
        <Meal
          key={meal.id}
          mealName={meal.name}
          imageURL={meal.image}
          category={meal.category}
          cuisine={meal.cuisine}
          isFavorited={MealManager.isMealFavorited(meal.id)}
          onStarClicked={() => onStarClicked(meal.id)}
        />
      ))}
    </div>
  );
};

export default Meals;
