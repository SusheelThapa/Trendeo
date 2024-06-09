import Image from "next/image";
import PopupAnimation from "./common/PopupAnimation";
const Banner = () => {
  return (
    <PopupAnimation>
        <section className="relative bg-black text-white py-16 md:mx-28 md:p-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex flex-col justify-center p-8 lg:p-14">
              <h3 className="text-[#00FF66] mb-6">Categories</h3>
              <h1 className="text-3xl md:text-5xl tracking-wider font-medium mb-6">
                Enhance Your Music Experience
              </h1>
              <div className="flex space-x-2 mb-6 ">
                {["Hours", "Days", "Minutes", "Seconds"].map((unit, index) => (
                  <div
                    key={unit}
                    className="flex flex-col justify-center items-center rounded-full bg-white text-black w-16 h-16 "
                  >
                    <p className="text-xl font-semibold m-0 leading-none">
                      {["23", "05", "59", "35"][index]}
                    </p>
                    <p className="text-xs m-0 leading-none">{unit}</p>
                  </div>
                ))}
              </div>
              <button className="bg-[#00FF66] text-black font-bold py-3 px-6 rounded hover:bg-green-500 w-36">
                Buy Now!
              </button>
            </div>
            <div className="w-3/4 md:w-1/2 flex justify-center bg-[#0f0f0f]">
              <div className="relative w-full h-full" style={{}}>
                <Image
                  src="/images/JBL.png" // Replace with your actual image path
                  alt="JBL Speaker"
                  width={500}
                  height={300}
        
                  className="md:p-10 object-contain"
                />
              </div>
            </div>
          </div>
        </section>
    </PopupAnimation>
  );
};

export default Banner;
