import img1 from "../../assets/team/1.jpg";
import img2 from "../../assets/team/2.jpeg";
import img3 from "../../assets/team/3.avif";

const AboutUs = () => {
  // Data for team members and testimonials
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      bio: "Passionate about fitness and innovation.",
      image: img1,
    },
    {
      name: "Jane Smith",
      role: "Chief Marketing Officer",
      bio: "Expert in marketing and customer outreach.",
      image: img2,
    },
    {
      name: "Sam Green",
      role: "Head of Product",
      bio: "Ensuring the best product quality and innovation.",
      image: img3,
    },
  ];

  const testimonials = [
    {
      name: "Emily Johnson",
      feedback: "Amazing products! Totally recommend them.",
    },
    {
      name: "Michael Lee",
      feedback: "Outstanding customer service and quality.",
    },
    {
      name: "Sarah Brown",
      feedback: "Love the variety and affordable prices.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center px-5 py-10 lg:px-40 bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Company Overview */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-5">
          About Our Company
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We have been providing top-quality fitness equipment and accessories
          for years. Our mission is to help you stay fit and healthy with the
          best products, and our vision is to become a leading provider of
          fitness solutions worldwide.
        </p>
      </section>

      {/* Team Introduction */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-100 transition-colors"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-md hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-10">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50 transition-colors"
            >
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <p className="mt-4 text-gray-800 font-semibold">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-5">
          Got questions or feedback? We’d love to hear from you!
        </p>
        <p className="text-lg font-semibold text-gray-800">
          Email:{" "}
          <a
            href="mailto:support@fitnessequipment.com"
            className="text-blue-500 hover:underline"
          >
            support@fitgearhub.com
          </a>
        </p>
        <p className="text-lg font-semibold text-gray-800">
          Phone: <span className="text-blue-500">+123 456 7890</span>
        </p>
        <p className="text-lg font-semibold text-gray-800">
          Address:{" "}
          <span className="text-blue-500">123 Fitness St, Wellness City</span>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
