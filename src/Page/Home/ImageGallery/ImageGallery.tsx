import React from "react";
import image1 from "../../../assets/1.avif";
import image2 from "../../../assets/2.avif";
import image3 from "../../../assets/3.avif";
import image4 from "../../../assets/4.avif";
import image5 from "../../../assets/5.avif";
import image6 from "../../../assets/1.avif";
import image7 from "../../../assets/4.avif";

const ImageGallery: React.FC = () => {
  const images = [
    {
      id: 1,
      src: image1,
      alt: "product-1",
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
    },
    {
      id: 2,
      src: image2,
      alt: "product-2",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      id: 3,
      src: image3,
      alt: "product-3",
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
    },
    {
      id: 4,
      src: image4,
      alt: "product-4",
      colSpan: "col-span-2",
      rowSpan: "row-span-1",
    },
    {
      id: 5,
      src: image5,
      alt: "product-5",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      id: 6,
      src: image6,
      alt: "product-6",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      id: 7,
      src: image7,
      alt: "product-7",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our Product Gallery
      </h2>

      <div className="grid grid-cols-6 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-lg group ${image.colSpan} ${image.rowSpan}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-bold opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                View More
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
