import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";
import HomeBanner from "../HomeBanner/HomeBanner";
import Information from "../Information/Information";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <div className="w-full mx-auto">
        <HomeBanner></HomeBanner>
      </div>
      <div className="max-w-6xl mx-auto w-full p-2 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {brands.map((brand) => (
            <Brand key={brand.id} brand={brand}></Brand>
          ))}
        </div>
      </div>
      <div className="py-3 text-center w-full mx-auto">
          <Information></Information>
        </div>
    </div>
  );
};

export default Home;
