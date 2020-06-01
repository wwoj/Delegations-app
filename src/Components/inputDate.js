import React from "react";

const InputDate = (props) => {
  return (
    
    
      
      <td>
      <input
        type={props.type}
        id="start"
        name={props.name}
        value = {props.value}
        min={props.min}
        max={props.max}
        onChange={props.handleChange}
        required
      />
       </td>
      
   
  );
};
export default InputDate;

// return (
    
    
//   <div className="input-date">
//   <td>
//   <input
//     type="date"
//     id="start"
//     name={props.nameDate}
    
//     min={props.minDate}
//     max={props.maxDate}
//     onChange={props.handleChange}
//   />
//   </td>
//   <td>
//   <input
//     type="time"
//     id="appt"
//     name="appt"
//     // min={props.minTime}
//     max="18:00"
//     name={props.nameTime}
//     onChange={props.handleChange}
//     value={props.placeHolderTime}
//     required
//   />
//   </td>
//   <td>
//     <span className="mandatory-information">*</span>
//     </td>
// </div>
// );
// };