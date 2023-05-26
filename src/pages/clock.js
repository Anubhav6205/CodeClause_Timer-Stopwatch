import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getRotation = (value, total) => {
    let val = value / total;
    return val * 360;
  };

  const hourRotation = getRotation(time.getHours(), 12);
  const minRotation = getRotation(time.getMinutes(), 60);
  const secRotation = getRotation(time.getSeconds(), 60);

  return (
    <div className="clock-body">
      <div className="container">
        <div className="clock">
          <div
            style={{
              "--clr": "red",
              transform: `rotate(${hourRotation}deg)`,
              "--hgt": "4rem"
            }}
            id="hour"
            className="hand"
          >
            <i></i>
          </div>
          <div
            style={{
              "--clr": "rgb(100,255,255)",
              transform: `rotate(${minRotation}deg)`,
              "--hgt": "5.5rem"
            }}
            id="minute"
            className="hand"
          >
            <i></i>
          </div>
          <div
            style={{
              "--clr": "white",
              transform: `rotate(${secRotation}deg)`,
              "--hgt": "7rem"
            }}
            id="second"
            className="hand"
          >
            <i></i>
          </div>

          <span style={{ "--i": 1 }}>1</span>
          <span style={{ "--i": 2 }}>3</span>
          <span style={{ "--i": 3 }}>4</span>
          <span style={{ "--i": 4 }}>2</span>
          <span style={{ "--i": 5 }}>5</span>
          <span style={{ "--i": 6 }}>6</span>
          <span style={{ "--i": 7 }}>7</span>
          <span style={{ "--i": 8 }}>8</span>
          <span style={{ "--i": 9 }}>9</span>
          <span style={{ "--i": 10 }}>10</span>
          <span style={{ "--i": 11 }}>11</span>
          <span style={{ "--i": 12 }}>12</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
