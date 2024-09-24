import Banner from "../Banner/Banner";
import BenefitsSection from "../BenifitsProduct/BenifitsProduct";
import CategoryCard from "../Category/Category";
import FeatureCards from "../FeatureCard/FeatureCards";
import ImageGallery from "../ImageGallery/ImageGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryCard></CategoryCard>
      <FeatureCards></FeatureCards>
      <BenefitsSection></BenefitsSection>
      <ImageGallery></ImageGallery>
    </div>
  );
};

export default Home;
