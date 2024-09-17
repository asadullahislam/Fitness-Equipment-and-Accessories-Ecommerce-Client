import Banner from "../Banner/Banner";
import BenefitsSection from "../BenifitsProduct/BenifitsProduct";
import CategoryCard from "../Category/Category";
import FeatureCard from "../FeatureCard/FeatureCards";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryCard></CategoryCard>
      <FeatureCard></FeatureCard>
      <BenefitsSection></BenefitsSection>
    </div>
  );
};

export default Home;
