import { useNavigate } from "react-router-dom";
import Break from "../images/break.png";
import Lunch from "../images/lunch.png";
import Dinner from "../images/dinner.png";
import Drink from "../images/drink.png";
import Dessert from "../images/dessert.png";
import Contact from "./Contact";
import About from "./About";
import bgvideo from "../videos/bg-video.mp4"
import img1 from "../images/hero-img1.webp"
import img2 from "../images/hero-img2.jpg"


const Home = () => {
  const navigate = useNavigate();

  const redirectToRecipe = () => {
    navigate("/recipes");
  };
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-10 overflow-x-hidden py-10 px-4 sm:px-6 md:px-10 max-w-screen h-auto md:h-screen text-green-500">
        <div className="w-full md:w-[60%] text-center md:text-left">
         <h1 className="text-lg sm:text-xl">Welcome to the Tasty-Bites</h1>
          <h1 className="font-[Open_Sans] tracking-wider text-black text-4xl sm:text-6xl md:text-8xl mt-6 md:mt-10 mb-6 md:mb-10 md:pl-10">
            Expl
            <span className="inline-block border-4 border-green-500 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={img2}
                // src="https://media.istockphoto.com/id/901354116/photo/traditional-italian-pasta-alla-norma-with-eggplant-tomato-cheese-and-basil.jpg?s=612x612&w=0&k=20&c=SIZvs4HVWT0ICi9-nP8w9TUhj3U8EksujdLyNUVpCY8="
                alt="o"
              />
            </span>
            re Easy
            <br />
            And Delici
            <span className="inline-block border-3 border-orange-400 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={img1}
                // src="https://images.pexels.com/photos/30892987/pexels-photo-30892987/free-photo-of-delicious-pancakes-with-honey-and-strawberries.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="o"
              />
            </span>
            us <br />
            Recipes
          </h1>
          <button
            onClick={redirectToRecipe}
            className="mt-4 md:mt-0 py-2 px-4 bg-green-900 rounded-full text-white active:scale-95 hover:bg-green-800 text-sm sm:text-base md:ml-20"
          >
            All Recipes{" "}
            <i className="text-lg sm:text-xl md:text-2xl ri-arrow-right-up-line"></i>
          </button>
        </div>

        <div className="w-full md:w-[40%] p-2 sm:p-4 flex justify-center md:justify-end">
          <div
            className="w-full sm:w-full md:w-full lg:w-[100%] h-[40vh] sm:h-[50vh] md:h-[65vh] mt-4 
                  rounded-none md:rounded-none lg:rounded-full overflow-hidden"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src={bgvideo}
                // src="https://videos.pexels.com/video-files/7172260/7172260-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div>
        <div className="py-10 px-4 sm:px-6 md:px-10 text-center  ">
          <h1 className="text-xl sm:text-2xl md:text-3xl">
            Browse Recipes by category!
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-8xl mt-10 text-black">
            Recipes <span className="text-green-500">Categories</span>
          </h1>
        </div>

        <div className="flex justify-center items-center gap-8 py-10 px-4 sm:px-6 md:px-10 flex-wrap md:flex-nowrap ">
          <div className="group w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px] rounded-full bg-green-200 overflow-hidden relative hover:bg-green-300 transform hover:scale-110 transition duration-300">
            <img
              className="absolute top-[40%] left-[50%] h-[60px] sm:h-[80px] md:h-[100px] w-[60px] sm:w-[80px] md:w-[100px] object-cover transform -translate-x-1/2 -translate-y-1/2"
              src={Break}
              alt="Breakfast image"
            />
            <h2 className="absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-green-800 font-bold text-sm sm:text-lg md:text-xl transition duration-300 group-hover:text-green-600">
              Breakfast
            </h2>
          </div>

          <div className="group w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px] rounded-full bg-green-200 overflow-hidden relative hover:bg-green-300 transform hover:scale-110 transition duration-300">
            <img
              className="absolute top-[40%] left-[50%] h-[60px] sm:h-[80px] md:h-[100px] w-[60px] sm:w-[80px] md:w-[100px] object-cover transform -translate-x-1/2 -translate-y-1/2"
              src={Lunch}
              alt="Lunch image"
            />
            <h2 className="absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-green-800 font-bold text-sm sm:text-lg md:text-xl transition duration-300 group-hover:text-green-600">
              Lunch
            </h2>
          </div>

          <div className="group w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px] rounded-full bg-green-200 overflow-hidden relative hover:bg-green-300 transform hover:scale-110 transition duration-300">
            <img
              className="absolute top-[40%] left-[50%] h-[60px] sm:h-[80px] md:h-[100px] w-[60px] sm:w-[80px] md:w-[100px] object-cover transform -translate-x-1/2 -translate-y-1/2"
              src={Dinner}
              alt="Dinner image"
            />
            <h2 className="absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-green-800 font-bold text-sm sm:text-lg md:text-xl transition duration-300 group-hover:text-green-600">
              Dinner
            </h2>
          </div>

          <div className="group w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px] rounded-full bg-green-200 overflow-hidden relative hover:bg-green-300 transform hover:scale-110 transition duration-300">
            <img
              className="absolute top-[40%] left-[50%] h-[60px] sm:h-[80px] md:h-[100px] w-[60px] sm:w-[80px] md:w-[100px] object-cover transform -translate-x-1/2 -translate-y-1/2"
              src={Drink}
              alt="Drink image"
            />
            <h2 className="absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-green-800 font-bold text-sm sm:text-lg md:text-xl transition duration-300 group-hover:text-green-600">
              Drink
            </h2>
          </div>

          <div className="group w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px] rounded-full bg-green-200 overflow-hidden relative hover:bg-green-300 transform hover:scale-110 transition duration-300">
            <img
              className="absolute top-[40%] left-[50%] h-[60px] sm:h-[80px] md:h-[100px] w-[60px] sm:w-[80px] md:w-[100px] object-cover transform -translate-x-1/2 -translate-y-1/2"
              src={Dessert}
              alt="Dessert image"
            />
            <h2 className="absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-green-800 font-bold text-sm sm:text-lg md:text-xl transition duration-300 group-hover:text-green-600">
              Dessert
            </h2>
          </div>
        </div>
      </div>
      <About />
      <Contact />
    </>
  );
};

export default Home;