import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const detail = data.find((detail) => detail._id == id);
  ///console.log(detail);
  const { image_url, name, type, short_description, rating } = detail;
  //console.log(detail);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image_url}
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">{name}</h1>
            <h2 className="text-2xl font-bold">{type}</h2>
            <p className="py-6">
             {short_description} <br />
             {rating}
            </p>
            <button className="btn btn-primary">Add to My Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
