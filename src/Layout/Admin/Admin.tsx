import { FaEdit } from "react-icons/fa";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../redux/api/api";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Admin = () => {
  // Fetch the products data
  const { data, isLoading, error } = useGetProductsQuery();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  // const products = data?.data || [];
  const products = Array.isArray(data?.data) ? data.data : [];

  const handleDelete = async (_id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      try {
        const result = await deleteProduct(_id).unwrap();
        console.log(result);
        console.log("Product deleted successfully");
      } catch (error) {
        console.log("Failed to delete product", error);
      }
    }
  };

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // // Handle error state
  // if (error) {
  //   return <div>Error loading products</div>;
  // }

  return (
    <div className="mx-auto my-7 w-full px-4 md:px-8">
      <h1 className="text-3xl md:text-5xl text-center mb-5">All Products</h1>

      {/* Check if the product list is empty */}
      <div className="w-full overflow-x-auto">
        {products.length === 0 ? (
          <div className="text-center text-lg">No products found.</div>
        ) : (
          <table className="table-auto w-full border">
            {/* Table Head */}
            <thead>
              <tr className="text-xs md:text-base">
                <th className="px-1 md:px-4">#</th>
                <th className="px-1 md:px-4">Name</th>
                <th className="px-1 md:px-4">Category</th>
                <th className="px-1 md:px-4">Price</th>
                <th className="px-1 md:px-4">Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id} className="text-xs md:text-base">
                  <th className="px-2 md:px-4">{index + 1}</th>
                  <td className="px-2 md:px-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-8 h-8 md:w-12 md:h-12">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xs md:text-base">
                          {product.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-1 md:px-4">{product.category}</td>
                  <td className="px-1 md:px-4">${product.price}</td>
                  <td className="px-1 md:px-4 flex items-center justify-center gap-1 md:gap-2">
                    <Link
                      to={`/updateProduct/${product._id}`}
                      className="btn btn-warning btn-xs md:btn-md"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn bg-red-500 btn-xs md:btn-md text-white"
                    >
                      {isDeleting ? "Deleting..." : <MdDelete />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Product Button is always displayed */}
      <div className="flex justify-end my-5 p-1 ">
        <Link to="/addProduct" className="btn btn-primary">
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default Admin;
