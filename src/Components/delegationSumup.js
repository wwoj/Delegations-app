import React from "react";

export default (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <span>Łączne koszty delegacji</span>
            </td>
            <td>
              <span>Opłacone przez pracownika (PLN)</span>
            </td>
            <td>
              <span>Pobrane zaliczki (PLN)</span>
            </td>
            <td>
              <span>Zwrot dla frimy lub pracownika (PLN)</span>
            </td>
          </tr>
          <tr className="calculator-sumup-border">
            <td>
              <span>{props.totalCost}</span>
            </td>
            <td>
              <span>{props.empleyeeCost}</span>
            </td>
            <td>
              <span>{props.advanceCost}</span>
            </td>
            <td>
              <span>{props.employeeReturnCost}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Opłacone kartą(PLN)</span>
            </td>
            <td>Opłacone przelewem</td>
            <td></td>
            <td></td>
          </tr>
          <tr >
            <td>
              <span>{props.campanyCardCost}</span>
            </td>
            <td>{props.campanyTransferCost}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
