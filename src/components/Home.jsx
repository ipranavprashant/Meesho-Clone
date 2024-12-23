import Banner from "./Banner";
import Footer from "./Footer";
import NavbarNew from "./NavbarNew";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div>
      <NavbarNew />
      <Banner />
      <div className="flex justify-center items-center space-x-4 p-8">
        <div className="w-72 h-0.5 bg-pink-600"></div>
        <span className="text-center text-gray-700 font-semibold md:text-3xl">
          Top Categories to choose from
        </span>
        <div className="w-72 h-0.5 bg-pink-600"></div>
      </div>
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;
