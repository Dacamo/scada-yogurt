import React, { useState, useEffect } from "react";

const YogurtContainer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      <p>El yogurt lleva {seconds} segundos en reposo.</p>
    </div>
  );
};

export default YogurtContainer;
