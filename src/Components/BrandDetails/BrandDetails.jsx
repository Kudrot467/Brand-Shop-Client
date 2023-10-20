import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
  const allProducts = useLoaderData();
  console.log(allProducts);
  const { brand_name } = useParams();

  const products = allProducts.filter(
    (products) => products.brand_name === brand_name
  );

  console.log(products);
  if (brand_name == "Samsung") {
    return (
      <div className="max-w-6xl mx-auto p-2">
        <p className="text-3xl font-semibold text-center text-red-700">No Products are Available</p>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto">

       {products.map((product) => (
          <div key={product._id}>
            <div className="card card-compact bg-base-100 shadow-xl w-full">
              <figure className="w-full h-full">
                <img src={product.image_url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#52BA5D]">{product.name}</h2>
                <p>{product.short_description}</p>
                <p className="text-[#52BA5D] font-bold">${product.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn text-[#52BA5D] hover:bg-[#52BA5D] hover:text-white">
                    Details
                  </button>
                  <Link to={`/update/${product._id}`}>
                    <button className="btn text-[#52BA5D] hover:bg-[#52BA5D] hover:text-white">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
       </div>
      </div>
    );
  }

  console.log(brand_name);

  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {products.map((product) => (
          <div key={product._id}>
            <div className="card card-compact bg-base-100 shadow-xl w-full">
              <figure className="w-full h-full">
                <img src={product.image_url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#52BA5D]">{product.name}</h2>
                <p>{product.short_description}</p>
                <p className="text-[#52BA5D] font-bold">${product.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn text-[#52BA5D] hover:bg-[#52BA5D] hover:text-white">
                    Details
                  </button>
                  <Link to={`/update/${product._id}`}>
                    <button className="btn text-[#52BA5D] hover:bg-[#52BA5D] hover:text-white">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
