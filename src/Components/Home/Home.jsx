import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";
import HomeBanner from "../HomeBanner/HomeBanner";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
        <div>
            <HomeBanner></HomeBanner>
        </div>
      <div className="max-w-6xl mx-auto w-full p-2 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {brands.map((brand) => (
            <Brand key={brand.id} brand={brand}></Brand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
