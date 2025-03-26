import Meals from "./meals";

const SearchResult = ({ heading, meals, onStarClicked }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        {heading}
      </h2>
      <Meals meals={meals} onStarClicked={onStarClicked} />
    </>
  );
};

export default SearchResult;
