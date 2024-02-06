import { useState, useRef, useEffect } from "react";
import "../Customization/timer.css";
const Timer = () => {
  //   const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

    const startTimer = (hours, minutes, seconds) => {
      let a = hours;
      let b = minutes;
      let c = seconds;

      let totalSeconds = a * 3600 + b * 60 + c;
      while (totalSeconds > 0) {
        totalSeconds = totalSeconds - 1;
        setHours(Math.floor(totalSeconds / 3600));
        setMinutes(Math.floor(totalSeconds - (a * 3600) / 60));
        setSeconds(totalSeconds - hours * 3600 - b * 60);
      }
    };
  const Ref = useRef(null);

  // // The state for our timer
  // const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

//   const startTimer = (e) => {
//     let { total, hours, minutes, seconds } = getTimeRemaining(e);
//     if (total >= 0) {
//       // update the timer
//       // check if less than 10 then we need to
//       // add '0' at the beginning of the variable
//       setTimer(
//         (hours > 9 ? hours : "0" + hours) +
//           ":" +
//           (minutes > 9 ? minutes : "0" + minutes) +
//           ":" +
//           (seconds > 9 ? seconds : "0" + seconds)
//       );
//     }
//   };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:10");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <label id="timer-title">
          Set The Timer
          <span>Timer: </span>
          {hours}h {minutes} m {seconds} s
          <input
            type="number"
            placeholder="00"
            id="hours"
            onChange={(e) => setHours(e.target.value)}
            value={hours}
          />{" "}
          <span>HH </span>
          <input
            type="number"
            placeholder="00"
            id="minutes"
            onChange={(e) => setMinutes(e.target.value)}
            value={minutes}
          />{" "}
          <span>MM </span>
          <input
            type="number"
            placeholder="00"
            id="seconds"
            onChange={(e) => setSeconds(e.target.value)}
            value={seconds}
          />{" "}
          <span>SS</span>
          <p>
            <button type="submit">Start</button>
            <button type="reset">Reset</button>
          </p>
          <hr />
        </label>
      </form>
      <h2>{timer}</h2>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
};

export default Timer;
