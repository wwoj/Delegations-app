import React, { Component } from "react";
import { getRate, getMidRate } from "../Services/servicurrency";
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


// Najpierw stworzenie expensu w obiekcie tutaj a następnie dodanie do tablicy przez przycisk zapisz i zamknij???
export default class Highorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "none",
      distance: "",
      amount: "",
      currency: "PLN",
      date: new Date().toISOString().substr(0, 10),
      currentRate: 0,
      totalCost: 0,
      paymentOption:"none",
      style:{ visibility: "show" }
    };
  }
  showEditor = () => {
    this.setState({ style: show });
  };
  hideEditor = () => {
   
    this.setState({ style: hide});
  };
  hidePaymentOption = ()=>{
    this.setState({ style: hide,paymentOption:"none"});
  }
  addEvent = () => {
    let object = {
      type: this.state.type,
      amount: this.state.amount,
      totalCost: this.state.totalCost,
      date: this.state.date,
      paymentOption: this.state.paymentOption,
      currency:this.state.currency,
      
    };
    this.props.addEvent(object);
    this.props.hideEditor();
    this.clearStateValues();
  };
  cancelEvent = () => {
    this.clearStateValues();
    this.props.hideEditor();
  };
  clearStateValues = () => {
    this.setState({
      type: "none",
      distance: "",
      amount: "",
      paymentOption:"none",
      currency: "PLN",
      date: new Date().toISOString().substr(0, 10),
      currentRate: 0,
      totalCost: 0,
      style:hide
      
    });
  };
  handleChange = (event) => {
    let object = event.target.name;
    let value = event.target.value;
    this.setState({ [object]: value });
    this.styleChange()
  };
  styleChange=()=>{
    console.log("typ wydatku?",this.state.type)
    if(this.state.type=="Zaliczka")
    {
      console.log("Chowam expensa")
      this.hidePaymentOption();
    }
    else{
      console.log("Pokazuje expensa")
      this.showEditor();
    }
  }
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
        this.styleChange()
        return this.handleCurrencyChange(this.state.currency, this.state.date);
      })
      .then(() => {
        this.caclSum();
      });
  };

  handleCurrencyChange = (currency, date) => {
    let retVal = getRate(currency, date)
      .then((response) => {
        if (response.rates[0].bid === 99.99) {
          let newReturn = getMidRate(currency, date);
          return newReturn.then((resp) => {
            console.log(resp.rates[0].mid);
            return resp.rates[0].mid;
          });
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
    let tempSum = (this.state.currentRate * this.state.amount).toFixed(2);
    this.setState({ totalCost: tempSum });
  }
  render() {
    const options = CURRENCYARRAY.map((element) => {
      return <option value={element.code}>{element.code}</option>;
    });
    return (
      <div style={this.props.style} className="editor-container">
        <div className="component-container">
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
            <select
              value={this.state.type}
              name="type"
              onChange={this.handleChangeSelect}
            >
        
              <option value="none"  disabled >...</option>
              <option value="Hotel">Hotel</option>
              <option value="Other">Inne</option>
              <option value="Train">Kolej</option>
              <option value="Nocleg">Nocleg</option>
              <option value="Small Car">Samochód prywatny do 900cm^2</option>
              <option value="Bigger Car">
                Samochód prywatny powyżej 900cm^2
              </option>
              <option value="Samochód służbowy">Samochód służbowy</option>
              <option value="Samolot">Samolot</option>
              <option value="Taxi">Taxi</option>
              <option value="Zaliczka">Zaliczka</option>
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
              value={this.state.amount}
            />
          </div>
          <div>
            Wybierz walutę:
            <select
              value={this.state.currency}
              name="currency"
              onChange={this.handleChangeSelect}
            >
              {options}
            </select>
          </div>
          <div>
            Wartość końcowa:
            <span>{this.state.totalCost} zł</span>
          </div>
          <div>
            Rodzaj płatności:
            <select
              value={this.state.paymentOption}
              name="paymentOption"
              onChange={this.handleChangeSelect}
              style={this.state.style}
            >
        
        <option value="none"  disabled >...</option>
              <option value="Karta firmowa">Karta firmowa</option>
              <option value="Pracownik">Pracownik</option>
              <option value="Przelew">Przelew</option>
                         </select>
          </div>
          <div>
            <button onClick={this.addEvent}>Zapisz</button>
            <button onClick={this.cancelEvent}>Anuluj</button>
          </div>
        </div>
        
      </div>
    );
  }
}
const show = {
  visibility: "visible",
};
const hide = {
  visibility: "hidden",
};
