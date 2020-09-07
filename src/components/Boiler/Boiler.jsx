import React, { useState, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import YogurtContainer from "../YogurtContainer";
import "./boiler.css";
import boilerOn from "../../assets/boilerOn.png";
import boilerOff from "../../assets/boilerOff.png";
import db from "../../database";

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const Boiler = () => {
  const [power, setPower] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [voltage, setVoltage] = useState(2);
  const [time, setTime] = useState(5000);
  const [chartData, setChartData] = useState([]);

  const getLogs = () => {
    db.collection("logs")
      .orderBy("date", "asc")
      .get()
      .then((snapshot) => {
        const documents = [];
        snapshot.forEach((doc) => {
          documents.push(doc.data());
        });

        const dataObject = documents.map(document => {
          const d = new Date(document.date);
          const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
          const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
          const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
          const hr = new Intl.DateTimeFormat('en', { hour: '2-digit', hour12: false }).format(d);
          const min = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(d);
          return Object.assign({}, {...document, name: `${hr}:${min} ${da}-${mo}-${ye}`});
        });

        setChartData(dataObject);
      });
  };

  const saveLog = (temperature) => {
    db.collection("logs")
      .add({
        temperature: temperature,
        date: Date.now()
      })
      .catch((err) => console.error(err));
  };

  const generateTemperature = () => {
    if (power === true) {
      const newTemperature = voltage * (time / 1000) + temperature;
      setTemperature(newTemperature);
      saveLog(temperature);
    } else {
      const newTemperature = temperature - 1;
      if (newTemperature <= 0) {
        setTemperature(0);
        saveLog(0);
      } else {
        setTemperature(newTemperature);
        saveLog(newTemperature);
      }
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
      <div>
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
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
      <div className="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="voltage">
          Voltaje
        </label>
        <input
          placeholder="Voltage"
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={voltage}
          id="voltage"
          onChange={(e) => setVoltage(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="time">
          Periodo de muestreo (ms)
        </label>
        <input
          placeholder="Periodo de muestreo"
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={time}
          id="time"
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>
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
      <div>
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
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
