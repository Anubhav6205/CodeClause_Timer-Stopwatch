import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);
  const [markedTime, setMarkedTime] = useState([]);

  useEffect(() => {
    if (run) {
      const stopW = setInterval(() => {
        setCount(count + 1);
        if (count > 99) {
          setSec(sec + 1);
          setCount(0);
        }
        if (sec > 59) {
          setMin(min + 1);
          setSec(0);
        }
        if (min > 59) {
          setHour(hour + 1);
          setMin(0);
        }
      }, 10);

      return () => clearInterval(stopW);
    }
  }, [count, sec, min, hour, run]);

  const handleReset = () => {
    setCount(0);
    setSec(0);
    setMin(0);
    setHour(0);
    handleStop();
    setMarkedTime([]);
  };

  const handleStart = () => {
    setRun(true);
  };

  const handleStop = () => {
    setRun(false);
  };

  const handleMark = () => {
    const currTime = `${hour}:${min}:${sec}:${count}`;
    setMarkedTime([...markedTime, currTime]);
  };

  return (
    <div className="stopwatch-body">
      <div className="container">
        <div className="left-side">
          <div className="stopwatch">
            <span className="hour">{hour}</span>
            <span>:</span>
            <span className="minute">{min}</span>
            <span>:</span>
            <span className="second">{sec}</span>
            <span>:</span>
            <span className="count">{count}</span>
          </div>

          <div className="buttons">
            <button className="start" onClick={handleStart}>
              Start
            </button>
            <button className="stop" onClick={handleStop}>
              Stop
            </button>
            <button className="reset" onClick={handleReset}>
              Reset
            </button>
            <button className="mark" onClick={handleMark}>
              Mark
            </button>
          </div>
        </div>

        <div className="right-side">
          <div className="marked-times">
            {markedTime.map((time, index) => (
              <div key={index}>{time}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
