import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
  const allProducts = useLoaderData();
  console.log(allProducts);
  const { brand_name } = useParams();
  const products = allProducts.filter(
    (products) => products.brand_name === brand_name
  );

  console.log(brand_name);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {products.map((product) => (
        <div key={product._id} >
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src={product.image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.short_description}</p>
              <p>{product.price}</p>
              <div className="card-actions justify-end">
                <button className="btn">Details</button>
                <Link to={`/update/${product._id}`}><button className="btn btn-primary">Update</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandDetails;
