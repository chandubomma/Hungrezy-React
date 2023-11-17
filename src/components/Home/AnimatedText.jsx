import React, { useState, useEffect } from 'react';

const AnimatedText = ({ textArray }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next text in the array
      setCurrentTextIndex((prevIndex) =>
        prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change text every 2 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [textArray]);

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold text-gray-500 transition duration-500 ease-in-out transform">
        {textArray[currentTextIndex]}
      </h1>
    </div>
  );
};

export default AnimatedText;
