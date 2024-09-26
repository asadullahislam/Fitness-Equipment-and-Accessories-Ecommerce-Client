import { Link } from "react-router-dom";
import FeatureCard from "./featureCard";
import { useGetProductsQuery } from "../../../redux/api/api";

const FeatureCards = () => {
  const { data: product } = useGetProductsQuery({});

  const products = product?.data || [];

  // console.log(products);
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 animate-pulse">
        Build Your Home Weight Room
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products?.slice(0, 3).map((product: any) => (
          <FeatureCard key={product._id} product={product}></FeatureCard>
        ))}
      </div>
      <div className="text-center my-2">
        <Link to="/products" className="btn btn-primary text-center ">
          Show More
        </Link>
      </div>
    </div>
  );
};

export default FeatureCards;
