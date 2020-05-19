import React, { Component } from "react";
import { getRate , getMidRate} from "../Services/servicurrency";
const CURRENCYARRAY = [
  { country: "Poland", code: "PLN" },
  { country: "Thailand", code: "THB" },
  { country: "USA", code: "USD" },
  { country: "Australia", code: "AUD" },
  { country: "Hongkong", code: "HDK" },
  { country: "Canada", code: "CAD" },
  { country: "New Zeland", code: "NZD" },
  { country: "Singapur", code: "SGD" },
  { country: "EU", code: "EUR" },
  { country: "Hungary", code: "HUF" },
  { country: "Swizterland", code: "CHF" },
  { country: "Great Britain", code: "GBP" },
  { country: "Ukraine", code: "UAH" },
  { country: "Japan", code: "JPY" },
  { country: "Cech Republic", code: "CZK" },
  { country: "Denmark", code: "DKK" },
  { country: "Iceland", code: "ISK" },
  { country: "Sweden", code: "SEK" },
  { country: "Croatia", code: "HRK" },
  { country: "Romania", code: "RON" },
  { country: "Bulgaria", code: "BGN" },
  { country: "Turkey", code: "TRY" },
  { country: "Israel", code: "ILS" },
  { country: "Chile", code: "CLP" },
  { country: "Philipns", code: "PHP" },
  { country: "Mexico", code: "MXN" },
  { country: "South Africa", code: "ZAR" },
  { country: "Brasil", code: "BRL" },
  { country: "Malesia", code: "MYR" },
  { country: "Rasia", code: "RUB" },
  { country: "Indonesia", code: "IDR" },
  { country: "India", code: "INR" },
  { country: "South Korea", code: "KRW" },
  { country: "China", code: "CNY" },
  { country: "MFW", code: "XDR" },
  { country: "Afghanistan", code: "AFN" },
  { country: "Madagaskar", code: "MGA" },
  { country: "Panama", code: "PAB" },
  { country: "Ethiopia", code: "ETB" },
  { country: "Venesuela", code: "VES" },
  { country: "Bolivia", code: "BOB" },
  { country: "Costarica", code: "CRC" },
  { country: "Salvator", code: "SVC" },
  { country: "Nikaragua", code: "NIO" },
  { country: "Gambia", code: "GMD" },
  { country: "Mecedonia", code: "MKD" },
];
const SMALLCAR = 0.52;
const BIGCAR = 0.82;

// Najpierw stworzenie expensu w obiekcie tutaj a następnie dodanie do tablicy przez przycisk zapisz i zamknij???
export default class Highorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      distance: 0,
      amount: 0,
      currency: "PLN",
      date: new Date().toISOString().substr(0, 10),
      currentRate: 0,
      totalCost: 0,
    };
  }
  addEvent=()=>{
    let object = {type: this.state.type, amount: this.state.totalCost, date: this.state.date}
    this.props.addEvent(object);
  }
  handleChange = (event) => {
    let object = event.target.name;
    let value = event.target.value;
    this.setState({ [object]: value });
  };

  handleChangeSelect = (event) => {
    let object = event.target.name;
    let value = event.target.value;
    let test = new Promise(function (resolve, reject) {
      console.error("Sprawdzam Czy sie polacze");
      resolve("First promise done");
    });
    test
      .then(() => {
        this.setState({ [object]: value });
      })
      .then(() => {
        return this.handleCurrencyChange(this.state.currency, this.state.date);
      })
      .then(() => {
                this.caclSum();
      });
  };
  handleCurrencyChange = (currency, date) => {
    let retVal = getRate(currency, date)
      .then((response) => {
        if( response.rates[0].bid===99.99)
        {
          
          let newReturn = getMidRate(currency, date)
         return newReturn
          .then((resp)=>{
            console.log(resp.rates[0].mid)
             return resp.rates[0].mid})
                }
        return response.rates[0].bid;
      })
      .then((resp) => {
        this.setState({ currentRate: resp });
        return resp;
      });
    return retVal;
  };
  caclSum() {
    let tempSum = (this.state.currentRate * this.state.amount).toFixed(2)   ;
    this.setState({ totalCost: tempSum });
  }
  render() {
    

    const options = CURRENCYARRAY.map((element) => {
      return <option value={element.code}>{element.code}</option>;
    });
    return (
      <div className="editor-container">
        <div>
          Wybierz Date:
          <input
            type="date"
            id="start"
            name="date"
            min="2018-01-01"
            value={this.state.date}
            max={new Date().toISOString().substr(0, 10)}
            onChange={this.handleChangeSelect}
          />
        </div>
        <div>
          Wybierz typ wydatku:
          <select name="type" onChange={this.handleChange}>
            <option value="none">...</option>
            <option value="Hotel">Hotel</option>
            <option value="Other">Inne</option>
            <option value="Train">Kolej</option>
            <option value="Nocleg">Nocleg</option>
            <option value="Small Car">Samochód prywatny do 900cm^2</option>
            <option value="Bigger Car">
              Samochód prywatny powyżej 900cm^2
            </option>
            <option value="Campany Car">Samochód służbowy</option>
            <option value="Airplane">Samolot</option>
            <option value="Taxi">Taxi</option>
            <option value="Advance">Zaliczka</option>
          </select>
        </div>
        <div>
          Wprowadz wartosc wydatku:
          <input
            onChange={this.handleChangeSelect}
            name="amount"
            type="number"
            placeholder="Wpisz kwote wydatku"
            step="0.01"
          />
        </div>
        <div>
          Wybierz walutę:
          <select name="currency" onChange={this.handleChangeSelect}>
            {options}
          </select>
        </div>
        <div>
          Wartość końcowa:
          <span>{this.state.totalCost} zł</span>
        </div>
        <div>
          <button onClick={this.addEvent}>Zapisz</button>
          <button onClick={this.addEvent}>Anuluj</button>
        </div>
        
      </div>
    );
  }
}
