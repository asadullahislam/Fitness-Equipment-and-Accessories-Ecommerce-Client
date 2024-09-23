import React from "react";
import { useAddProductMutation } from "../../../redux/api/api";

const AddProduct = () => {
  const [addProduct, { isLoading, isError, isSuccess, error }] =
    useAddProductMutation();

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const quantity = Number(form.quantity.value);
    const image = form.image.value;

    const productData = {
      name,
      price: parseFloat(price),
      category: [category],
      description,
      quantity,
      image,
    };

    console.log(productData);

    try {
      const result = await addProduct(productData).unwrap();
      console.log(result);
      form.reset();
      console.log("Product added successfully");
    } catch (err) {
      console.error("Failed to add product:", err);
      if (err.data) {
        console.error("Error data:", err.data);
      }
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-7">Add Product</h1>
      <div>
        <div className="bg-base-100 shadow-2xl">
          <form onSubmit={handleAddProduct}>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Product name"
                name="name"
                className="input input-bordered input-accent w-full"
                required
              />
              <input
                type="text"
                name="price"
                placeholder="Product Price"
                className="input input-bordered input-accent w-full"
                required
              />
              <select
                name="category"
                className="input input-bordered input-accent w-full"
                required
              >
                <option value="">Select a category</option>
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
                <option value="Yoga">Yoga</option>
                <option value="Accessories">Accessories</option>
                <option value="Recovery">Recovery</option>
              </select>

              <input
                type="text"
                name="description"
                placeholder="Product description"
                className="input input-bordered input-accent w-full"
                required
              />

              <input
                type="number"
                name="quantity"
                placeholder="Product quantity"
                className="input input-bordered input-accent w-full"
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Product Image URL"
                className="input input-bordered input-accent w-full"
                required
              />
              <input
                type="submit"
                className="btn btn-primary"
                value="Add Product"
                disabled={isLoading}
              />
            </div>
          </form>

          {/* Show loading, success, or error messages */}
          {isLoading && <p>Loading...</p>}
          {isSuccess && <p>Product added successfully!</p>}
          {isError && (
            <p>Error: {error?.data?.message || "Failed to add product"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
