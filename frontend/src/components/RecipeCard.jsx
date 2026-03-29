import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="hover:scale-105 duration-75 block w-full rounded overflow-hidden shadow-2xl bg-white"
    >
      <img className="object-cover w-full h-[25vh]" src={image} alt="" />
      <h1 className="px-2 mt-2 font-black text-black">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 py-2 pb-3 text-black ">
        {desc?.slice(0, 100) || "No description"}...
        <small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;