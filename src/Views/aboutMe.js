import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
export default class AboutMe extends Component {
  state = {
    name: "",
    receiptId: 0,
    price1: 0,
    price2: 0,
    surname: "",
    delegationNumber: "",
    test: {
      country: "Bułgaria",
      code: "bg",
      currency: "eur",
      value: 40,
      accom: 120,
    },
    startPlace: "Kraków",
    destination: "NWD",
    endPlace: "Kraków",
    ///Daty test
    startDate: new Date().toISOString().substr(0, 10),
    startTime: new Date().toISOString().substr(11, 5),
    startDateAbroad: new Date().toISOString().substr(0, 10),
    startTimeAbroad: new Date().toISOString().substr(11, 5),
    stopDate: new Date().toISOString().substr(0, 10),
    stopTime: new Date().toISOString().substr(11, 5),
    stopDateAbroad: new Date().toISOString().substr(0, 10),
    stopTimeAbroad: new Date().toISOString().substr(11, 5),
    transport: "Z buta",
    comments: "Nie mam",
    travelPurpose: "Wyjazd testowy",
    //Jedzenie:
    breakfastAmount: 99,
    dinnerAmount: 98,
    sapperAmount: 97,
    amountdietPL: 199,
    amountOtherCurrency: 2999,
    currency: "EUR",
    sumOfDietMinusMeals: 123123,
    amountDietOutInPLN: 9999,
    expenses: [
      {
        amount: "11",
        currency: "PLN",
        date: "2020-06-04",
        paymentOption: "Karta firmowa",
        totalCost: "123.00",
        type: "To samo",
      },
      {
        amount: "15",
        currency: "PLN",
        date: "2020-06-04",
        paymentOption: "Karta prywatna",
        totalCost: "345.00",
        type: "Inny",
      },
      {
        amount: "95",
        currency: "EUR",
        date: "2020-06-04",
        paymentOption: "Karta firmowa",
        totalCost: "4564.00",
        type: "Inny",
      },
    ],
    totalExpenses:101,
    employeeTotalCost:102,
    totalAdvance:103,
    employerrReturnCost:-104,
    campanyCardCosts:105,
    campanyTransfer:106,
    currencyRateDate:"2020/06/04",
    currencyRate:4.04
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPdf = () => {
    axios
      .post(
        "https://excellent-capable-vulcanodon.glitch.me/create-pdf",
        this.state
      )
      .then(() =>
        axios.get("https://excellent-capable-vulcanodon.glitch.me/fetch-pdf", {
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };
  render() {
    return (
      <div className="container-contact">
        Testowe drukowanie:
        <br />
        <div className="App">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Surname"
            name="surname"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Delegacja"
            name="delegationNumber"
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Receipt ID"
            name="receiptId"
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Price 1"
            name="price1"
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Price 2"
            name="price2"
            onChange={this.handleChange}
          />
          <button onClick={this.createAndDownloadPdf}>Download PDF</button>
        </div>
        <div>
          <p>{this.state.name}</p>
          <p>{this.state.surname}</p>
          <p>{this.state.receiptId}</p>
          <p>{this.state.price1}</p>
          <p>{this.state.price2}</p>
        </div>
      </div>
    );
  }
}
