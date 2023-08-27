import React, { useState, useEffect } from "react";
const TextChanger = ({ texts_arr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update the current index
  const updateIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts_arr.length);
  };

  // Function to change the text after a certain time interval
  useEffect(() => {
    const intervalId = setInterval(updateIndex, 5000); // Change text every 3000ms (3 seconds)
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [currentIndex]);

  return (
    <div className="w-full text-white text-4xl font-bold qoute">
      &quot;&nbsp;<span>{texts_arr[currentIndex]}</span>&nbsp;&quot;
    </div>
  );
};
export default TextChanger;
