import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  children?: React.ReactElement;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="relative mb-4 w-full my-8">
      <div className="flex flex-col gap-2 md:gap-3">
        <div className="flex items-center gap-3 md:gap-5">
          <div className="h-6 w-2 md:h-10 md:w-6 rounded-md bg-red-500"></div>
          <h2 className="text-red-500 font-semibold text-sm md:text-md">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-20">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold">
            {subtitle}
          </h3>
          {children && <div className="hidden lg:block">{children}</div>}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 flex gap-3 items-center space-x-2 text-gray-900 ">
        <FaArrowLeft size={24} />
        <FaArrowRight size={24} />
      </div>
    </div>
  );
};

export default SectionHeader;
