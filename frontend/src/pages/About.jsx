import { useNavigate } from "react-router-dom";
import bg from "../images/about-img.jpg"


const About = () => {
  const navigate = useNavigate();

  const redirectToRecipe = () => {
    navigate("/contact");
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 gap-8 ">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-green-600">
          Tasty-Bites
        </h2>
        <p className="text-gray-500 text-lg">
          Welcome to{" "}
          <span className="font-semibold text-green-500">Tasty-Bites</span> -
          your ultimate destination for delicious, easy-to-follow recipes from
          around the world. Whether you're a beginner cook or a seasoned chef,
          our platform offers something for everyone!
        </p>
        <p className="text-gray-500">
          Our mission is to inspire people to create magic in their kitchens
          with fresh ingredients, step-by-step guides, and a pinch of passion.
          From hearty meals to light snacks, Tasty-Bites covers it all.
        </p>
        <p className="text-gray-500">
          Join our growing community and explore endless flavors. Your taste
          adventure begins here!
        </p>

        <button
          onClick={redirectToRecipe}
          className="mt-4 md:mt-0 py-2 px-4 bg-green-900 rounded-full text-white active:scale-95 hover:bg-green-800 text-sm sm:text-base md:ml-20"
        >
          Contact us{" "}
          <i className="text-lg sm:text-xl md:text-2xl ri-arrow-right-up-line"></i>
        </button>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          // src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          src={bg}
          alt="Delicious Recipe"
          className="w-[300px] md:w-[400px] lg:w-[500px] rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default About;