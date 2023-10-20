import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const selectedItems = useLoaderData();
  console.log(selectedItems);

  const cartItems = selectedItems.filter(
    (cartItem) => cartItem.email === user.email
  );
  console.log(cartItems.length);
  console.log(user);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cartItems.map((cartItem) => ( <div key={cartItem._id}>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cartItem.name}</h2>
                <p>{cartItem.brand_name}</p>
                <p>{cartItem.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
