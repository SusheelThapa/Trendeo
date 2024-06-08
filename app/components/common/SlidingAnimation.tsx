/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";

interface SlidingAnimationProps {
  children: React.ReactNode;
}

const slidingVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const SlidingAnimation: React.FC<SlidingAnimationProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
        localStorage.setItem(`cardShown-${entry.target.id}`, "true");
      }
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.1,
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    const cardId = cardRef.current?.id;
    if (cardId && localStorage.getItem(`cardShown-${cardId}`) === "true") {
      setIsVisible(true);
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      id={`card-${Math.random()}`}
      variants={slidingVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default SlidingAnimation;
