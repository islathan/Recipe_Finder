import Meal from "./meal";

const Meals = ({ meals, onStarClicked }) => {
  if (!meals) {
    return;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <Meal
            key={meal.id}
            mealName={meal.name}
            imageURL={meal.image}
            category={meal.category}
            cuisine={meal.cuisine}
            isFavorited={meal.mealIsFavorited()}
            onStarClicked={() => onStarClicked(meal.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Meals;
