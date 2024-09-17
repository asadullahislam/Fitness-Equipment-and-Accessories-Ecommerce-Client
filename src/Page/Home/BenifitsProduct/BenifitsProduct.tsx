import React from "react";
import img1 from "../../../assets/benifit/1.webp";
import img2 from "../../../assets/benifit/2.avif";
import img3 from "../../../assets/benifit/3.avif";

const BenefitsSection: React.FC = () => {
  return (
    <div className="m-5">
      <div>
        <h2 className="text-5xl font-bold mb-4 text-center ">
          Benefits of Gym & Fitness Equipment
        </h2>
      </div>
      <div className="container mx-auto py-16 px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          {/* Images Section */}
          <div className="flex-1 flex justify-center gap-4">
            {/* Image container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src={img1}
                alt="Gym Equipment"
                className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              />
              <img
                src={img2}
                alt="Workout Routine"
                className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              />
              <img
                src={img3}
                alt="Strength Training"
                className="ml-[150px] -mt-[90px] w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300 hidden sm:block"
              />
            </div>
          </div>

          {/* Blog Section */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg text-gray-600 mb-4">
              Fitness equipment plays a critical role in helping you achieve
              your goals, whether you're building strength, endurance, or
              flexibility. Using high-quality equipment can improve the
              efficiency and safety of your workout routines.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Some key benefits of using gym equipment include targeted muscle
              engagement, enhanced stability during workouts, and the ability to
              measure and track your progress. Additionally, a well-designed
              home gym can save you time and money by eliminating the need for
              gym memberships.
            </p>
            <p className="text-lg text-gray-600">
              Explore our top-notch gym equipment designed to cater to fitness
              enthusiasts at every level. Let’s work together toward a
              healthier, fitter you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
