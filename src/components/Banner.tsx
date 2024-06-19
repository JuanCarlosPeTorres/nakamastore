import { Carousel } from "flowbite-react";

export const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mb-8">
      <div className="h-20 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={3000}>
          <img className="object-cover w-full h-full" src="funkos/banners/01.png" alt="Banner 1" />
          <img className="object-cover w-full h-full" src="funkos/banners/01.png" alt="Banner 2" />
          <img className="object-cover w-full h-full" src="funkos/banners/01.png" alt="Banner 3" />
          <img className="object-cover w-full h-full" src="funkos/banners/01.png" alt="Banner 4" />
        </Carousel>
      </div>
    </div>
  );
};
