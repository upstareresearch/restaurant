import { useContext, useState } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Singlerecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      category: recipe?.category,
      desc: recipe?.desc,
      ingredients: recipe?.ingredients,
      instructions: recipe?.instructions,
    },
  });

  const UpdateHandler = (recipeData) => {
    const index = data.findIndex((r) => params.id == r.id);
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], ...recipeData };
    setData(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData));
    toast.success("Recipe Updated!");
  };

  const DeleteHandler = () => {
    const filteredData = data.filter((r) => r.id != params.id);
    setData(filteredData);
    localStorage.setItem("recipes", JSON.stringify(filteredData));
    toast.success("Recipe Deleted!");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="w-full flex flex-col md:flex-row gap-6  p-4 md:p-10">
      <div className="relative md:w-1/2 w-full flex flex-col items-start">
        <h1 className="text-3xl sm:text-4xl mb-3 font-bold text-black">
          {recipe.title}
        </h1>
        <img
          className="h-auto w-full max-h-[30vh] object-cover rounded mb-4"
          src={recipe.image}
          alt=""
        />
        <h2 className="text-red-500 mb-2">
          <span className="text-black font-bold">Chef Name: </span>
          {recipe.chef}
        </h2>
        <h2 className="text-red-500 mb-2">
          <span className="text-black font-bold">Category: </span>
          {recipe.category}
        </h2>
        <p className="text-black mb-2">
          <span className="font-bold">Description:</span> {recipe.desc}
        </p>
        <p className="text-black mb-2">
          <span className="font-bold">Ingredients:</span> {recipe.ingredients}
        </p>
        <p className="text-black mb-2">
          <span className="font-bold">Instructions:</span> {recipe.instructions}
        </p>
      </div>

      <div className="w-full md:w-1/2 border-2 rounded-lg p-4 md:p-8 text-black bg-white shadow-md">
        <form onSubmit={handleSubmit(UpdateHandler)} className="space-y-4">
          <div>
            <label htmlFor="image" className="block font-semibold mb-1">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              {...register("image")}
              className="w-full border-b border-green-400 outline-none p-2"
              placeholder="Enter Image URL"
            />
          </div>

          <div>
            <label htmlFor="title" className="block font-semibold mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="w-full border-b border-green-400 outline-none p-2"
              placeholder="Enter Recipe Title"
            />
          </div>

          <div>
            <label htmlFor="chef" className="block font-semibold mb-1">
              Chef Name
            </label>
            <input
              type="text"
              id="chef"
              {...register("chef")}
              className="w-full border-b border-green-400 outline-none p-2"
              placeholder="Enter Chef Name"
            />
          </div>

          <div>
            <label htmlFor="category" className="block font-semibold mb-1">
              Category
            </label>
            <select
              id="category"
              {...register("category")}
              className="w-full border-b border-green-400 outline-none p-2"
            >
              <option value="none">Select Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="drink">Drink</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          <div>
            <label htmlFor="desc" className="block font-semibold mb-1">
              Description
            </label>
            <textarea
              id="desc"
              {...register("desc")}
              className="w-full border-b border-green-400 outline-none p-2"
              placeholder="Enter Description (comma separated)"
            />
          </div>

          <div>
            <label htmlFor="ingredients" className="block font-semibold mb-1">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              {...register("ingredients")}
              className="w-full border-b border-green-400 outline-none p-2"
              placeholder="Enter Ingredients (comma separated)"
            />
          </div>

          <div>
            <label htmlFor="instructions" className="block font-semibold mb-1">
              Instructions
            </label>
            <textarea
              id="instructions"
              {...register("instructions")}
              className="w-full border-b border-green-400 outline-none p-2"
              placeholder="Enter Instructions (comma separated)"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition active:scale-95"
            >
              Update Recipe
            </button>
            <button
              type="button"
              onClick={DeleteHandler}
              className="w-full sm:w-auto bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition active:scale-95"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <p className="text-center text-lg mt-10">Loading...</p>
  );
};

export default Singlerecipe;
