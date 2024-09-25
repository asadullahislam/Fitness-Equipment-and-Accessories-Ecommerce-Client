// export default UpdateProduct;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../../redux/api/api";

const UpdateProduct = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading: isFetchingProduct,
    error: fetchError,
  } = useGetProductByIdQuery(id); // Fetch product by ID

  const [updateProduct, { isLoading: isUpdating, isSuccess, isError, error }] =
    useUpdateProductMutation();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    quantity: "",
    image: "",
  });

  // Only update formData if product is available
  useEffect(() => {
    console.log(product);
    if (product) {
      setFormData({
        name: product.data.name || "",
        price: product.data.price || "",
        category: product.data.category,
        description: product.data.description || "",
        quantity: product.data.quantity || "",
        image: product.data.image || "",
      });
    }
  }, [product]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateProduct = async (event) => {
    event.preventDefault();

    try {
      const updatedProduct = {
        ...formData,
        price: parseFloat(formData.price),
        quantity: Number(formData.quantity),
      };

      const result = await updateProduct({
        _id: id,
        data: updatedProduct,
      }).unwrap();
      console.log(result);
      console.log("Product updated successfully");
    } catch (err) {
      console.error("Failed to update product:", err);
    }
  };

  if (isFetchingProduct) return <div>Loading product...</div>;
  if (fetchError) return <div>Error fetching product data</div>;

  // Check if the product is available before rendering the form
  if (!product) return <div>No product data available</div>;

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-7">Update Product</h1>
      <div>
        <div className="bg-base-100 shadow-2xl">
          <form onSubmit={handleUpdateProduct}>
            <div className="mt-6">
              <input
                type="text"
                name="name"
                value={formData.name} // Set default value
                onChange={handleChange}
                placeholder="Product name"
                className="input input-bordered input-accent w-full my-1"
                required
              />
              <input
                type="text"
                name="price"
                value={formData.price} // Set default value
                onChange={handleChange}
                placeholder="Product Price"
                className="input input-bordered input-accent w-full my-1"
                required
              />
              <select
                name="category"
                value={formData.category} // Set default value
                onChange={handleChange}
                className="select select-bordered select-accent w-full my-1"
                required
              >
                <option value="">Select category</option>
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
                <option value="Yoga">Yoga</option>
                <option value="Accessories">Accessories</option>
                <option value="Recovery">Recovery</option>
              </select>
              <input
                type="text"
                name="description"
                value={formData.description} // Set default value
                onChange={handleChange}
                placeholder="Product description"
                className="input input-bordered input-accent w-full my-1"
                required
              />
              <input
                type="number"
                name="quantity"
                value={formData.quantity} // Set default value
                onChange={handleChange}
                placeholder="Product quantity"
                className="input input-bordered input-accent w-full my-1"
                required
              />
              <input
                type="text"
                name="image"
                value={formData.image} // Set default value
                onChange={handleChange}
                placeholder="Product Image URL"
                className="input input-bordered input-accent w-full my-1"
                required
              />
              <div className="text-center my-5">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Update Product"
                  disabled={isUpdating}
                />
              </div>
            </div>
          </form>

          {isUpdating && <p>Updating product...</p>}
          {isSuccess && (
            <p className="text-center text-3xl font-bold text-green-400 ">
              Product updated successfully!
            </p>
          )}
          {isError && (
            <p>Error: {error?.data?.message || "Failed to update product"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
