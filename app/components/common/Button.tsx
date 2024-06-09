import React from "react";

interface ButtonProps {
  color: "red" | "green";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
  const backgroundColor = color === "red" ? "bg-red-500" : "bg-green-500";

  return (
    <button
      className={`${backgroundColor} text-white font-semibold py-2 my-2  mx-6 md:my-3 md:mx-8 lg:my-4 lg:mx-10 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-lg focus:outline-none focus:shadow-outline text-sm md:text-base lg:text-lg tracking-wider cursor-pointer`}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
