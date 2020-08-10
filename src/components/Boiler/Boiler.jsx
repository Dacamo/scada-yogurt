import React, { useState, useEffect } from "react";
import YogurtContainer from "../YogurtContainer";

const Boiler = () => {
  const [power, setPower] = useState(true);
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const generateTemperature = (min, max) => {
      const randomTemperature = Math.floor(
        Math.random() * (max - min + 1) + min
      );
      setTemperature(randomTemperature);
    };

    const temperatureInterval = setInterval(() => {
      generateTemperature(44, 48);
    }, 5000);

    return () => clearInterval(temperatureInterval);
  }, [temperature]);

  const isBoilingPoint = (value) => {
    if (value >= 44 && value <= 45) {
      return true;
    }
    return false;
  };

  if (!power) {
    return (
      <>
        <p>La caldera se encuentra apagada.</p>
        <button onClick={() => setPower(true)}>Encender</button>
        {!power && <YogurtContainer />}
      </>
    );
  }

  return (
    <>
      <div>
        <p>
          La temperatura en la caldera es de{" "}
          <span
            style={
              isBoilingPoint(temperature)
                ? { color: "green" }
                : { color: "red" }
            }
          >
            {temperature}
          </span>
        </p>
        <button onClick={() => setPower(false)}>Apagar</button>
      </div>
    </>
  );
};

export default Boiler;
