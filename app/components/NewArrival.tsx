import Image from "next/image";
import SectionHeader from "./common/SectionHeader";
import PopupAnimation from "./common/PopupAnimation";

const NewArrival = () => {
  return (
    <section className="mx-4 md:mx-28 my-10 flex flex-col justify-center ">
      <SectionHeader title="Featured" subtitle="New Arrival" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PopupAnimation>
          <div className="relative p-4 flex justify-center items-center bg-black rounded-md h-[280px] lg:h-[580px] lg:w-[570]">
            <div className="relative w-full h-full">
              <Image
                src="/images/ps5.png"
                alt="PS5"
                // layout="fill"
                fill
                className="rounded-md md:p-10 object-contain"
              />
            </div>
            <div className="absolute inset-0 flex items-end z-20">
              <div className="text-white p-10 md:w-1/2">
                <h2 className="text-2xl font-bold tracking-tight my-4">
                  PlayStation 5
                </h2>
                <p className="text-md font-normal mb-4">
                  Black and White version of the PS5 comming out on sale
                </p>
                <span className="text-lg font-medium hover:cursor-pointer border-b-2 border-white">
                  Shop now
                </span>
              </div>
            </div>
          </div>
        </PopupAnimation>
        <div className="grid md:grid-rows-2 gap-5">
          <PopupAnimation>
            <div
              className="relative p-4 flex justify-center items-center bg-black rounded-md"
              style={{ height: "280px" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/women_collections.png"
                  alt="Women Collections"
                  // layout="fill"
                  fill
                  className="rounded-md  object-contain"
                />
              </div>
              <div className="absolute inset-0 flex items-end z-20">
                <div className="text-white p-10 md:w-1/2">
                  <h2 className="text-2xl font-bold tracking-tight my-4 w-1/2 md:w-full">
                    Women&apos;s Collections
                  </h2>
                  <p className="text-md font-normal mb-4">
                    Featured woman collections that give you another vibe.
                  </p>
                  <span className="text-lg font-medium hover:cursor-pointer border-b-2 border-white">
                    Shop now
                  </span>
                </div>
              </div>
            </div>
          </PopupAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PopupAnimation>
                <div
                  className="relative p-4 flex justify-center items-center bg-black rounded-md"
                  style={{ height: "280px" }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/speaker.png"
                      alt="Speaker"
                      // layout="fill"
                      fill
                      className="rounded-md md:p-10  object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end z-20">
                    <div className="text-white p-10 ">
                      <h2 className="text-2xl font-bold tracking-tight my-1">
                        Speakers
                      </h2>
                      <p className="text-md font-normal mb-1">
                        Amazon wireless speakers
                      </p>
                      <span className="text-md font-medium hover:cursor-pointer border-b-2 border-white">
                        Shop now
                      </span>
                    </div>
                  </div>
                </div>
            </PopupAnimation>
            <PopupAnimation>
                <div
                  className="relative p-4 flex justify-center items-center bg-black rounded-md"
                  style={{ height: "280px" }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/perfume.png"
                      alt="Perfume"
                      // layout="fill"
                      fill
                      className="rounded-md md:p-10 object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end z-20">
                    <div className="text-white p-10 ">
                      <h2 className="text-2xl font-bold tracking-tight my-1">
                        Perfume
                      </h2>
                      <p className="text-md font-normal mb-1">
                        GUCCI INTENSE OUD ESP
                      </p>
                      <span className="text-md font-medium hover:cursor-pointer border-b-2 border-white">
                        Shop now
                      </span>
                    </div>
                  </div>
                </div>
            </PopupAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
