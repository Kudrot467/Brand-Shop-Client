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
        fetch("https://1001-brand-server.vercel.app/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        })
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
              if (data.insertedId) {
                  Swal.fire("Happy News!", "Product has been added in the database!", "success");
                  form.reset()
                  }
          });
    }

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div>
        <div>
          <form action="" onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#52BA5D] font-medium text-lg">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image url"
                name="image_url"
                className="input input-bordered border-[#52BA5D] w-3/4 md:w-full lg:w-1/2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#52BA5D] font-medium text-lg">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered border-[#52BA5D] w-3/4 md:w-full lg:w-1/2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#52BA5D] font-medium text-lg">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="Brand Name"
                name="brand_name"
                className="input input-bordered border-[#52BA5D] w-3/4 md:w-full lg:w-1/2"
                required
              />
            </div>
            <br />
            <select
              name="type"
              className="select select-primary  text-[#52BA5D]  text-lg border-[#52BA5D] w-3/4 md:w-full lg:w-1/2"
            >
              <option disabled selected className="text-[#52BA5D] font-medium text-lg">
                Types of products?
              </option>
              <option className="text-[#52BA5D] font-medium text-lg">Phones</option>
              <option className="text-[#52BA5D] font-medium text-lg">Headphones</option>
              <option className="text-[#52BA5D] font-medium text-lg"> Smart TV</option>
              <option className="text-[#52BA5D] font-medium text-lg">Computer</option>
            </select>
            <br />
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#52BA5D] font-medium text-lg">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered border-[#52BA5D] w-3/4 md:w-full lg:w-1/2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#52BA5D] font-medium text-lg">Short description</span>
              </label>
              <input
                type="text"
                placeholder="Short description"
                name="short_description"
                className="input input-bordered border-[#52BA5D] w-3/4 md:w-full lg:w-1/2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#52BA5D] font-medium text-lg">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered border-[#52BA5D] w-3/4 md:w-full lg:w-1/2"
                required
              />
            </div>
            <input
              type="submit"
              value="Add Product"
              className="btn bg-[#52BA5D] font-medium text-lg text-white "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
