import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="grid gap-6 px-10 py-10 text-black  grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
      {" "}
      {data.length > 0 ? (
        renderrecipes
      ) : (
        <div className="w-full flex justify-center items-center h-[50vh] col-span-full">
          <p className="text-2xl font-semibold text-gray-400">
            No recipes found!
          </p>
        </div>
      )}
    </div>
  );
};
export default Recipes;