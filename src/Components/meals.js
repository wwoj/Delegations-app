import React, { Component } from "react";
export default (props) => {
  return (
    <div>
     
      <table className="calculator-date-table">
        <tbody>
          <tr>
            <th>Liczba śniadań:</th>
            <th>Liczba obiadów:</th>
            <th>Liczba kolacji:</th>
          </tr>
          <tr>
            <td>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="0"
                name="breakfastAmount"
                onChange={props.handleChange}
              />
            </td>
            <td>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="0"
                name="dinnerAmount"
                onChange={props.handleChange}
              />
            </td>
            <td>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="0"
                name="sapperAmount"
                onChange={props.handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
