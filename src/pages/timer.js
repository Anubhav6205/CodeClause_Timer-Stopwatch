import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faUndo } from "@fortawesome/free-solid-svg-icons";

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        if (running === true) {
          if (sec === 0) {
            if (min === 0) {
              if (hour === 0) {
                clearInterval(interval);
                setRunning(false);
                const timerContainer =
                  document.querySelector(".timer-container");
                timerContainer.classList.add("shake");

                // Remove the shake class after 5 seconds
                setTimeout(() => {
                  timerContainer.classList.remove("shake");
                }, 5000);
                return 0;
              } else {
                setHour((prevHour) => prevHour - 1);
                setMin(59);
                setSec(59);
              }
            } else {
              setMin((prevMin) => prevMin - 1);
              setSec(59);
            }
          } else {
            setSec((prevSec) => prevSec - 1);
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running, hour, min, sec]);

  const handleStart = (event) => {
    event.preventDefault();
    setRunning(true);
  };

  const handlePause = (event) => {
    event.preventDefault();
    setRunning(false);
  };

  const handleReset = () => {
    setHour(0);
    setMin(0);
    setSec(0);
    setRunning(false);
  };

  const getRotation = (value, max) => {
    return (value / max) * 360;
  };

  const hourRotation = getRotation(hour + min / 60, 12);
  const minRotation = getRotation(min + sec / 60, 60);
  const secRotation = getRotation(sec, 60);

  return (
    <div className="timer-body">
      <div className="timer-container">
        <div className="watch">
          <div
            className="hand hour-hand"
            style={{ transform: `rotate(${hourRotation}deg)` }}
          >
            <i></i>
          </div>
          <div
            className="hand minute-hand"
            style={{ transform: `rotate(${minRotation}deg)` }}
          >
            <i></i>
          </div>
          <div
            className="hand second-hand"
            style={{ transform: `rotate(${secRotation}deg)` }}
          ></div>
        </div>
        <div className="container-button">
          <form className="timer-form" onSubmit={handleStart}>
            <div className="inputs">
              <input
                className="timer-input"
                type="number"
                id="hour"
                value={hour}
                onChange={(event) => setHour(parseInt(event.target.value))}
                min="0"
                max="12"
              />
              <span>:</span>
              <input
                className="timer-input"
                type="number"
                id="min"
                value={min}
                onChange={(event) => setMin(parseInt(event.target.value))}
                min="0"
                max="59"
              />
              <span>:</span>
              <input
                className="timer-input"
                type="number"
                id="sec"
                value={sec}
                onChange={(event) => setSec(parseInt(event.target.value))}
                min="0"
                max="59"
              />
            </div>
            <div className="buttons">
              <button className="timer-button" type="submit">
                <FontAwesomeIcon icon={faPlay} />
              </button>
              <button className="timer-button" onClick={handlePause}>
                <FontAwesomeIcon icon={faPause} />
              </button>
              <button className="timer-button" onClick={handleReset}>
                <FontAwesomeIcon icon={faUndo} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Timer;
