import React, { useState, useEffect } from "react";
import YogurtContainer from "../YogurtContainer";
import "./boiler.css";
import boilerOn from "../../assets/boilerOn.png";
import boilerOff from "../../assets/boilerOff.png";
import db from "../../database";

const Boiler = () => {
  const [power, setPower] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [voltage, setVoltage] = useState(2);
  const [time, setTime] = useState(5000);

  const getLogs = () => {
    db.collection("logs")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.data());
        });
      });
  };

  const saveLog = (temperature) => {
    db.collection("logs")
      .add({
        temperature: temperature,
        date: Date.now()
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const generateTemperature = () => {
    const newTemperature = voltage * (time / 1000) + temperature;
    if (power === true) {
      setTemperature(newTemperature);
      console.log('getting called');
      saveLog(temperature);
    } else {
      setTemperature(newTemperature);
      saveLog(temperature);
    }
  };

  useEffect(() => {
    getLogs();

    const temperatureInterval = setInterval(() => {
      generateTemperature();
    }, time);

    return () => clearInterval(temperatureInterval);
  }, [temperature, power, time]);

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
        <hr />
        <div className="flex justify-center">
          <img src={boilerOn} alt="Caldera encendida" />
        </div>
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
        <div className="flex justify-center">
          <button
            className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
            onClick={() => setPower(true)}
          >
            Encender
          </button>
        </div>
        {!power && <YogurtContainer />}
      </>
    );
  }

  return (
    <>
      <input
        placeholder="Voltage"
        type="number"
        value={voltage}
        onChange={(e) => setVoltage(Number(e.target.value))}
      />
      <input
        placeholder="Periodo de muestreo"
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
      />
      <p>Caldera: Encendida</p>
      <hr />
      <div className="flex justify-center">
        <img src={boilerOff} alt="Caldera apagada" />
      </div>
      <p>
        La temperatura en la caldera es de{" "}
        <span
          style={
            isBoilingPoint(temperature) ? { color: "green" } : { color: "red" }
          }
        >
          {temperature}
        </span>
      </p>
      <div className="flex justify-center">
        <button
          className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
          onClick={() => setPower(false)}
        >
          Apagar
        </button>
      </div>
    </>
  );
};

export default Boiler;
