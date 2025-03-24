import StarOutline from "./star-outline";
import StarSolid from "./star-solid";

const Meal = ({
  mealName,
  imageURL,
  category,
  cuisine,
  isFavorited,
  onStarClicked,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div>
        <img
          src={imageURL}
          alt={`Picture of ${mealName}`}
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="p-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{mealName}</h3>
          <p className="text-gray-600 mt-2">{`${cuisine}, ${category}`}</p>
        </div>
        <button type="button" onClick={onStarClicked}>
          {isFavorited ? <StarSolid /> : <StarOutline />}
        </button>
      </div>
    </div>
  );
};

export default Meal;
