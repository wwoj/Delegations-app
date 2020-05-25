import React from "react";

const InputDate = (props) => {
  return (
    <div className="container-date-in-out">
      <span>{props.textData}</span>
      <div className="input-date">
      <div>
      <input
        type="date"
        id="start"
        name={props.nameDate}
        
        min={props.minDate}
        max={props.maxDate}
        onChange={props.handleChange}
      />
      </div>
      <div>
      <input
        type="time"
        id="appt"
        name="appt"
        // min={props.minTime}
        max="18:00"
        name={props.nameTime}
        onChange={props.handleChange}
        value={props.placeHolderTime}
        required
      />
      </div>
      </div>
    </div>
  );
};
export default InputDate;
