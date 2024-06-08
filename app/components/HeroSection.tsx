import Image from 'next/image';
import heroImage from '../../public/images/HeroImage.png'; // Adjust the path as necessary

const HeroSection = () => {
    return (
        <>
        
        <section className="relative h-[182px] md:h-[300px] w-auto text-white">
            <Image src={heroImage} alt="Apple Logo" className='object-contain hover:cursor-pointer'/>
        </section>
        </>
    );
};

export default HeroSection;
