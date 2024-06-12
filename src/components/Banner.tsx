import { Carousel } from "flowbite-react";

export const Banner = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-8">
      <Carousel slideInterval={3000}>
        <img src="../../funkos/banners/01.png" alt="..." />
        <img src="../../funkos/banners/01.png" alt="..." />
        <img src="../../funkos/banners/01.png" alt="..." />
        <img src="../../funkos/banners/01.png" alt="..." />
      </Carousel>
    </div>
  )
};
