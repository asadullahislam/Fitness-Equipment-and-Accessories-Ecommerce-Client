import { useAddProductMutation } from "../../../redux/api/api";

const AddProduct = () => {
  const [addProduct, { isLoading, isError, isSuccess, error }] =
    useAddProductMutation();

  console.log(error);
  const handleAddProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    // const name = form.name.value;
    // const price = form.price.value;
    // const category = form.category.value;
    // const description = form.description.value;
    // const quantity = Number(form.quantity.value);
    // const image = form.image.value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const price = (form.elements.namedItem("price") as HTMLInputElement).value;
    const category = (form.elements.namedItem("category") as HTMLSelectElement)
      .value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value;
    const quantity = Number(
      (form.elements.namedItem("quantity") as HTMLInputElement).value
    );
    const image = (form.elements.namedItem("image") as HTMLInputElement).value;

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
    } catch (error) {
      console.error("Failed to add product:", error);
      if ((error as any).data) {
        console.error("Error data:", (error as any).data);
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
                className="input input-bordered input-accent w-full my-1"
                required
              />
              <input
                type="text"
                name="price"
                placeholder="Product Price"
                className="input input-bordered input-accent w-full my-1"
                required
              />
              <select
                name="category"
                className="input input-bordered input-accent w-full my-1"
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
                className="input input-bordered input-accent w-full my-1"
                required
              />

              <input
                type="number"
                name="quantity"
                placeholder="Product quantity"
                className="input input-bordered input-accent w-full my-1"
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Product Image URL"
                className="input input-bordered input-accent w-full my-1"
                required
              />
              <div className="text-center my-3 my-1">
                <input
                  type="submit"
                  className="btn btn-primary px-8"
                  value="Add Product"
                  disabled={isLoading}
                />
              </div>
            </div>
          </form>

          {/* Show loading, success, or error messages */}
          {isLoading && <p>Loading...</p>}
          {isSuccess && (
            <p className="text-center text-4xl font-bold mx-auto text-green-600">
              Product added successfully!
            </p>
          )}
          {isError && <p>Error product not add successfull </p>}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
