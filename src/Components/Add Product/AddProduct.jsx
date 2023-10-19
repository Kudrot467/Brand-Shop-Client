import Swal from "sweetalert2";
const AddProduct = () => {

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target
        const image_url = form.image_url.value
        const name = form.name.value
        const brand_name = form.brand_name.value;
        const type = form.type.value
        const price = form.price.value
        const short_description = form.short_description.value
        const rating = form.rating.value
        const product = {
          image_url,
          name,
          type,
          price,
          short_description,
          rating,
          brand_name,
        };
        console.log(product);
        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        })
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
              if (data.insertedId) {
                  Swal.fire("Good job!", "Product has added in the database!", "success");
                  form.reset()
                  }
          });
    }

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-bold">
          this is the add product section
        </h1>
        <div>
          <form action="" onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image url"
                name="image_url"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <br />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <br />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="Brand Name"
                name="brand_name"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
           
            <select
              name="type"
              className="select select-primary w-full max-w-xs"
            >
              <option disabled selected>
                Types of products?
              </option>
              <option>Phones</option>
              <option>Headphones</option>
              <option> Smart TV</option>
              <option>Computer</option>
            </select>
            <br />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <br />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <input
                type="text"
                placeholder="Short description"
                name="short_description"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <br />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <br />
            <input
              type="submit"
              value="Add Product"
              className="btn btn-secondary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
