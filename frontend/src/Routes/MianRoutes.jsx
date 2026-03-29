
import { Route, Routes } from "react-router-dom";
import Recipes from "../pages/Recipes";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Createrecipe from "../pages/Createrecipe";
import Singlerecipe from "../pages/Singlerecipe";
import PageNotFound from "../pages/PageNotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<Singlerecipe />} />
      <Route path="/create-recipe" element={<Createrecipe />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;