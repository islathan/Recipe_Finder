const RecipeSearchForm = ({ recipeSearchString, setRecipeSearchString }) => {
  const onRecipeSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onRecipeSearch} className="max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search..."
        value={recipeSearchString}
        onChange={(e) => setRecipeSearchString(e.target.value)}
        className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </form>
  );
};

export default RecipeSearchForm;
