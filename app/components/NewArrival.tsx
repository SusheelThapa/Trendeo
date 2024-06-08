import Image from 'next/image';

const NewArrival = () => {
  return (
    <section className="md:mx-28 my-10 max-w-[1170px]">
      <h1 className="text-2xl mt-4">New Arrival</h1>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="relative" style={{ height: '600px', width: '570px' }}>
          <Image
            src="/images/ps5.png"
            alt="PS5"
            layout="fill"
            objectFit="contain"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white">Your Text Here</span>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-5">
          <div className="relative" style={{ height: '280px' }}>
            <Image
              src="/images/women_collections.png"
              alt="Women Collections"
              layout="fill"
              objectFit="contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white">Your Text Here</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative" style={{ height: '280px' }}>
              <Image
                src="/images/speaker.png"
                alt="Speaker"
                layout="fill"
                objectFit="contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white">Your Text Here</span>
              </div>
            </div>
            <div className="relative" style={{ height: '280px' }}>
              <Image
                src="/images/perfume.png"
                alt="Perfume"
                layout="fill"
                objectFit="contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white">Your Text Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
