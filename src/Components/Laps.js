import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Laps = (props) => {
  const { AllLaps, lapDisplay, DeleteLaps, ClearAll } = props;

  return (
    <div className="flex justify-center mt-3" style={{ display: lapDisplay }}>
      <div className="LapDiv ">
        <div className="lapHeader flex justify-between">
          <span className="ml-3">Lap</span>
          <span className="ml-10">Lap Timer</span>
          <span>
            <button className="btn btn-danger clearallbtn mr-3" onClick={ClearAll}>
              Clear All
            </button>
          </span>
        </div>
        <div>
          {AllLaps.map((value, ind) => {
            return (
              <div key={ind} className="mt-4 flex justify-between">
                <span className="ml-5">#{ind + 1}</span>
                <span className="ml-5">
                  <span>
                    {value.h >= 10 ? value.h : "0" + value.h}
                  </span>
                  :
                  <span>
                    {value.m >= 10 ? value.m : "0" + value.m}
                  </span>
                  :
                  <span>
                    {value.s >= 10 ? value.s : "0" + value.s}
                  </span>
                  :
                  <span>
                    {value.ms >= 10 ? value.ms : "0" + value.ms}
                  </span>
                </span>
                <DeleteIcon
                  className="DltIcon mr-8"
                  style={{ color: "red" }}
                  onClick={() => DeleteLaps({ ind })}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Laps;
