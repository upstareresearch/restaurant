import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./Routes/MianRoutes";

const App = () => {
  return (
    <div className="py-6 px-10 w-screen h-screen bg-white overflow-x-hidden  text-green-500">
      <Navbar />
      <MainRoutes/>
      <Footer />
    </div>
  );
};

export default App;
