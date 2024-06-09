import Image from "next/image";
import heroImage from "../../public/images/HeroImage.png"; // Adjust the path as necessary
import ShopByCategory from "./ShopByCategory";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mx-4 md:gap-14 md:mx-28">
        <div className="hidden lg:block">
          <ShopByCategory />
        </div>
        <div className="relative w-full h-[170px] md:h-[250px] lg:h-[500px] text-white mt-6 md:col-span-2">
          <Image
            src={heroImage}
            alt="Apple Logo"
            className=" absolute object-contain hover:cursor-pointer w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
