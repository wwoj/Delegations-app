import React from "react";

export default (props) => {
  return (
    <div className="traveler-date">
      <table>
        <tr>
          <td>
            <span>Imię:</span>
          </td>
          <td>
            <span>Nazwisko:</span>
          </td>
          <td>
            <span>Nazwa firmy:</span>
          </td>
        </tr>
        <tr>
          <td>
            <input onChange={props.handleChange} type="text" name="name" placeholder="Podaj imię..." />
          </td>
          <td>
            <input onChange={props.handleChange} type="text" name="surname" placeholder="Podaj nazwisko..." />
          </td>
          <td>
            <input onChange={props.handleChange} type="text" name="campany" placeholder="Podaj nazwe firmy..."  />
          </td>
        </tr>
        <tr>
          <td>
            <span>Numer delegacji</span>
          </td>
          <td>
            <span>Środek transportu</span>
          </td>
          <td>
            <span>Uwagi</span>
          </td>
        </tr>
        <tr>
          <td>
            <input onChange={props.handleChange} type="text" name="delegationNumber" placeholder="Numer delegacji..."  />
          </td>
          <td>
            <input onChange={props.handleChange} type="text" name="transport" placeholder="Środek transportu..." />
          </td>
          <td>
            <input onChange={props.handleChange} type="text" name="comments" placeholder="Uwagi..." />
          </td>
        </tr>
        <tr>
            <td className="travel-purpose" colspan="3">Cel podróży</td>
        </tr>
        <tr>
            <td className="travel-purpose" colspan="3"><input onChange={props.handleChange} type="text" name="travelPurpose" placeholder="Cel delegacji..."  style={inputStyle}/></td>
        </tr>
        <tr>
          <td>
            <span>Miejsce rozpoczęcia</span>
          </td>
          <td>
            <span>Miejsce docelowe</span>
          </td>
          <td>
            <span>Miejsce zakończenia</span>
          </td>
        </tr>
        <tr>
          <td>
            <input onChange={props.handleChange} type="text" name="startPlace" placeholder="Miejsce rozpoczęcia..."  />
          </td>
          <td>
            <input onChange={props.handleChange} type="text" name="destination" placeholder="Miejsce docelowe..." />
          </td>
          <td>
            <input onChange={props.handleChange} type="text" name="endPlace" placeholder="Miejsce zakończenia..." />
          </td>
        </tr>
      </table>
    </div>
  );
};
const inputStyle = {
    
    width: "100%",
    
  };