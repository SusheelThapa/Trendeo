"use client";

import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { motion } from "framer-motion";

const ActionButtons: React.FC = () => {
  const [liked, setLiked] = useState(false);

  // Toggle the liked state
  const handleLike = () => {
    setLiked(!liked);
  };

  // Animation variants for the like button
  const buttonVariants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.8 },
  };

  return (
    <div className="absolute top-2 right-2 flex flex-col items-center space-y-2 z-10">
      <motion.button
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        onClick={handleLike}
        className={`hover:text-red-500 ${
          liked ? "text-red-500" : "text-gray-800"
        }`}
      >
        {liked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
      </motion.button>
      <motion.button
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        className="text-gray-800 hover:text-blue-500"
      >
        <AiOutlineEye size={24} />
      </motion.button>
    </div>
  );
};

export default ActionButtons;
