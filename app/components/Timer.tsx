"use client";

import React, { useState, useEffect } from "react";

interface Props {
  targetDate: string;
}

const Timer: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap space-x-4 text-center">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div key={index} className="flex flex-col items-start justify-center">
          <span className="text-xs md:text-sm lg:text-base uppercase">
            {unit}
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold flex gap-1 md:gap-2 lg:gap-4">
            {String(value).padStart(2, "0")}
            {index < Object.entries(timeLeft).length - 1 && (
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500">
                :
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Timer;
