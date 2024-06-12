import React, { useState } from 'react';

interface CarouselDotsProps {
  images: string[];
  selectedImage: number;
  onChange: (index: number) => void;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({ images, selectedImage, onChange }) => {
  return (
    <div className="flex justify-center mt-4">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-3 h-3 rounded-full mx-1 ${
            selectedImage === index ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};
