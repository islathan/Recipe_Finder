const RecipeSearchForm = ({
  onRecipeSearch,
  recipeSearchString,
  setRecipeSearchString,
}) => {
  return (
    <form
      onSubmit={onRecipeSearch}
      className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
    >
      <input
        type="text"
        placeholder="Search..."
        value={recipeSearchString}
        onChange={(e) => setRecipeSearchString(e.target.value)}
        className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        type="submit"
        className="w-full sm:w-1/4 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default RecipeSearchForm;
