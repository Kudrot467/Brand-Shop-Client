import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
  return (
    <div>
      <h2 className="text-4xl">Brands:{brands.length}</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
     {brands.map(brand =><Brand key={brand.id} brand={brand} ></Brand> )}
     </div>
    </div>
  );
};

export default Home;
