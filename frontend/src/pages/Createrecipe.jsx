import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Createrecipe = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("New Recipe Created!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="flex justify-center items-center py-10 px-4 min-h-screen">
      <div className="w-full max-w-2xl border-2 border-gray-300 rounded-lg shadow-md p-6 bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-6 font-bold text-green-600  font-[Open_Sans]">
          Create a Recipe
        </h1>
        <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-4">
          <input
            type="url"
            id="image"
            className="border rounded border-green-400 outline-none p-2 w-full"
            {...register("image")}
            placeholder="Enter Image URL"
          />
          <input
            type="text"
            id="title"
            className="border rounded border-green-400 outline-none p-2 w-full"
            {...register("title")}
            placeholder="Enter Recipe Title"
          />
          <input
            type="text"
            id="chef"
            className="border rounded border-green-400 outline-none p-2 w-full"
            {...register("chef")}
            placeholder="Enter Chef Name"
          />
          <select
            className="block w-full outline-none border rounded border-green-400 p-2 bg-white text-green-400"
            {...register("category")}
          >
            <option className="text-green-400 " value="none">
              Select Category
            </option>
            <option className="text-green-400" value="breakfast">
              Breakfast
            </option>
            <option className="text-green-400" value="lunch">
              Lunch
            </option>
            <option className="text-green-400" value="dinner">
              Dinner
            </option>
            <option className="text-green-400" value="drink">
              Drink
            </option>
            <option className="text-green-400" value="dessert">
              Dessert
            </option>
          </select>

          <textarea
            className="border rounded border-green-400 outline-none p-2 w-full"
            {...register("desc")}
            placeholder="Enter Description - Separated by comma(,)"
          ></textarea>

          <textarea
            className="border rounded border-green-400 outline-none p-2 w-full"
            {...register("ingredients")}
            placeholder="Enter Ingredients - Separated by comma(,)"
          ></textarea>

          <textarea
            className="border rounded border-green-400 outline-none p-2 w-full"
            {...register("instructions")}
            placeholder="Enter Instructions - Separated by comma(,)"
          ></textarea>

          <button className="w-full mt-4 py-2 bg-orange-700 rounded text-white font-semibold hover:bg-orange-800 active:scale-95 transition-transform duration-200">
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createrecipe;
