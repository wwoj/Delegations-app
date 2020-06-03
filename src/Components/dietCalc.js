import React from "react";
export default (props) => {
  return (
    <div className="diet-calculator">
      <table className="calculator-date-table">
        <tr >
          <th className="calculator-date-th">
            <span>Dieta krajowa</span>
          </th>
          <th className="calculator-date-th">
            <span>Waluta</span>
          </th>
          <th className="calculator-date-th">
            <span>Dieta zagraniczna</span>
          </th>
          <th className="calculator-date-th"> 
            <span>Waluta</span>
          </th>
        </tr>
        <tr className="calculator-sumup-border">
          <td>
            <span>{props.countryDiet}</span>
          </td>
          <td>
            <span>PLN</span>
          </td>
          <td>
            <span>{props.foreignDiet}</span>
          </td>
          <td>
            <span>{props.foreignCurrency.toUpperCase()}</span>
          </td>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>
            <span>Suma</span>
          </th>
          <th>
            <span>Waluta</span>
          </th>
        </tr>
        <tr >
          <td></td>
          <td></td>
          <td>
            <span>{props.sumDiet}</span>
          </td>
          <td>
            <span>PLN</span>
          </td>
        </tr>
      </table>
    </div>
  );
};
