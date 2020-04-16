import React from "react";

const InputDate = (props) => {
  return (
    <div>
      <input
        type="date"
        id="start"
        name="trip-start"
        
        min="2018-01-01"
        max="2999-12-31"
        onChange={props.handleChange}
      />
      <input
        type="time"
        id="appt"
        name="appt"
        min="09:00"
        max="18:00"
        required
      />
    </div>
  );
};
export default InputDate;
