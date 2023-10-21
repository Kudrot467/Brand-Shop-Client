import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Components/Providers/AuthProvider";

const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const{user}=useContext(AuthContext);
  
  const detail = data.find((detail) => detail._id == id);
  ///console.log(detail);
  const { image_url, name, type, short_description, rating } = detail;
  const email=user.email;
  const handleSendToCart = (detail, email) => {
    const { name , brand_name, type , price ,image_url, rating,_id } = detail;
    const cartItems = {
      _id,
      email,
      name,
      brand_name,
      type ,
      price,
      image_url,
      rating
    };
    fetch("https://1001-brand-server.vercel.app/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        if (data.insertedId) {
          Swal.fire(
            "Congrats!",
            "Product has added in MyCart!",
            "success"
          );
        }
      });
  };

  //console.log(detail);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image_url} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold text-[#52BA5D]">{name}</h1>
            <h2 className="text-2xl font-bold text-[#AD66D9]">{type}</h2>
            <p className="py-6">
              {short_description} <br />
             {" "}
              <div className="rating rating-lg flex items-center">
              <p className="text-orange-400 text-2xl">{rating}</p>
                <input type="radio" name="rating-9" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-orange-400"
                  
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div> <br />
              
            </p>
            <Link to={`/myCart`}>
              <button onClick={()=>handleSendToCart(detail,email)} className="btn bg-[#52BA5D] text-white hover:text-[#52BA5D]">
                Add to My Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
