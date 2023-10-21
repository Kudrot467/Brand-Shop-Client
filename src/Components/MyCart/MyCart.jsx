import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const selectedItems = useLoaderData();
 

  const cartItems = selectedItems.filter(
    (cartItem) => cartItem.email === user.email
  );
  const [items,setItems]=useState(selectedItems);
  console.log(selectedItems);
    

  const handleDelete=(_id)=>{
        fetch(`https://1001-brand-server-co5flblq6-roses-projects-57afa947.vercel.app/cart/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
                 if (data.deletedCount>0) {
                Swal.fire("Thank You!", "Deleted Successfully", "success");
                const remaining=items.filter(item=>item._id!==_id);
                console.log('remaining',remaining);
                setItems(remaining);
                }
        })
  }

  return (
    <div className="max-w-7xl mx-auto p-2">
        {
            items.length==0 && <p className="text-3xl font-semibold text-[#AD66D9]">Hello New Comers! Welcome to our shop. You have no products yet. Please add products</p>
        }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cartItems.map((cartItem) => ( <div key={cartItem._id}>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src={cartItem.image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cartItem.name}</h2>
                <p className="text-xl">{cartItem.brand_name}</p>
                <p className="text-xl">{cartItem.type}</p>
                <div className="card-actions justify-end ">
                <button onClick={()=>handleDelete(cartItem._id)} className="btn text-[#52BA5D] hover:bg-[#52BA5D] hover:text-white" >Remove</button>
             </div>
              </div>
             
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
