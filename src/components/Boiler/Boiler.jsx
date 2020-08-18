import React, { useState, useEffect } from "react";
import YogurtContainer from "../YogurtContainer";
import "./boiler.css";
import boilerOn from '../../assets/boilerOn.png'
import boilerOff from '../../assets/boilerOff.png'


const Boiler = () => {
  const [power, setPower] = useState(true);
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const generateTemperature = () => {
      if(power === true){
        setTemperature(temperature + 1)
      }else{
        setTemperature(temperature - 1)
      }
    };
    
    const temperatureInterval = setInterval(() => {
      generateTemperature();
    }, 1000);

    return () => clearInterval(temperatureInterval);
  }, [temperature]);

  const isBoilingPoint = (value) => {
    if (value >= 44 && value <= 48) {
      return true;
    }
    return false;
  };

  if (!power) {
    return (
      <>
      <p>Caldera: Apagada</p>
      <hr/>
      <div className="flex justify-center">
        <img src={boilerOn}/>
      </div>
      <p>
        La temperatura en la caldera es de{" "}
        <span
          style={
            isBoilingPoint(temperature) ? { color: "green" } : { color: "red" }}>
          {temperature}
        </span>
      </p>
        <div className="flex justify-center">
          <button
            className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
            onClick={() => setPower(true)}>
            Encender
          </button>
        </div>
        {!power && <YogurtContainer />}
      </>
    );
  }

  return (
    <>
    <p>Caldera: Encendida</p>
    <hr/>
      <div className="flex justify-center">
        <img src={boilerOff}/>
      </div>
      <p>
        La temperatura en la caldera es de{" "}
        <span
          style={
            isBoilingPoint(temperature) ? { color: "green" } : { color: "red" }}>
          {temperature}
        </span>
      </p>
      <div className="flex justify-center">   
        <button
          className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
          onClick={() => setPower(false)}>
          Apagar
        </button>
      </div>
    </>
  );
};

export default Boiler;
