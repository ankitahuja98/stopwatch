import { useEffect, useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Timer from "./Components/Timer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Laps from "./Components/Laps";
// import PauseIcon from '@mui/icons-material/Pause';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });

  const [Interval, SetInterval] = useState();

  const [AllLaps, setAllLaps] = useState([]);

  const [BtnDisplay, SetBtnDisplay] = useState({
    Startbtn: "block",
    Pausebtn: "none",
    Resumebtn: "none",
    Resetbtn: true,
    lapbtn: true,
  });
  const [lapDisplay, SetlapDisplay] = useState("none");

  useEffect(() => {
    if (AllLaps.length === 0) {
      SetlapDisplay("none");
    }
  }, [AllLaps]);

  var updatedH = time.h,
    updatedM = time.m,
    updatedS = time.s,
    updatedMS = time.s;

  const run = () => {
    if (updatedMS === 100) {
      updatedS++;
      updatedMS = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    updatedMS++;
    return setTime({ ms: updatedMS, s: updatedS, m: updatedM, h: updatedH });
  };

  const StartFunc = () => {
    SetInterval(setInterval(run, 10));
    SetBtnDisplay({
      Startbtn: "none",
      Pausebtn: "block",
      Resumebtn: "none",
      Resetbtn: false,
      lapbtn: false,
    });
  };

  const PauseFunc = () => {
    clearInterval(Interval);
    SetBtnDisplay({
      Startbtn: "none",
      Pausebtn: "none",
      Resumebtn: "block",
      Resetbtn: false,
      lapbtn: false,
    });
  };

  const ResumeFunc = () => {
    StartFunc();
  };

  const ResetFunc = () => {
    clearInterval(Interval);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    SetBtnDisplay({
      Startbtn: "block",
      Pausebtn: "none",
      Resumebtn: "none",
      Resetbtn: true,
      lapbtn: true,
    });
    SetlapDisplay("none");
    setAllLaps([]);
  };

  const LapFunc = () => {
    setAllLaps((value) => {
      return [...value, time];
    });
    SetlapDisplay("flex");
  };

  const DeleteLaps = (id) => {
    setAllLaps((oldvalue) =>
      oldvalue.filter((value, index) => {
        return index !== id.ind;
      })
    );
  };

  const ClearAllFunc = () => {
    setAllLaps([]);
  };

  return (
    <div>
      <Timer time={time} />
      <Buttons
        start={StartFunc}
        Pause={PauseFunc}
        Resume={ResumeFunc}
        reset={ResetFunc}
        Lap={LapFunc}
        BtnDisplay={BtnDisplay}
      />
      <Laps
        AllLaps={AllLaps}
        lapDisplay={lapDisplay}
        DeleteLaps={DeleteLaps}
        ClearAll={ClearAllFunc}
      />
    </div>
  );
}

export default App;
