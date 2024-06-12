import React, { useState } from 'react';
import { CarouselDots } from "./CarouselDots";

interface CarouselImagesProps {
  images: string[];
}

export const CarouselImages: React.FC<CarouselImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="bg-gray-200 border border-gray-200 p-4 rounded-md flex flex-col items-center"> 
      <div className="flex">
        <div className="flex flex-col space-y-2"> 
          {images.map((_, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-16 h-16 border-2 ${
                selectedImage === index ? "border-blue-500 bg-white" : "border-white bg-gray-200"
              }`}
            >
              <img
                src={`../${images[index]}`}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded-full"
              />
            </button>
          ))}
        </div>
        <div>
          <img
            src={`../${images[selectedImage]}`}
            alt={images[selectedImage]}
            className="w-full rounded-lg"
          />
          <div className="flex justify-center"> 
            <CarouselDots
              images={images}
              selectedImage={selectedImage}
              onChange={setSelectedImage}
            />
          </div> 
        </div>
      </div>
    </div>
  );
};
