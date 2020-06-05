import React, { Component } from "react";
import InputDate from "../Components/inputDate";
import { getAllCountries } from "../Services/travelCosts";
import Option from "../Components/selects";
import { allNBPCurrency } from "../Services/servicurrency";

import ExpenseEditor from "./expenseEditor";
import Meals from "../Components/meals";
import DietCalculator from "../Components/dietCalc";
import Traveler from "../Components/traveler";
import DelegationSumup from "../Components/delegationSumup";
import Logo2 from "../Objects/Logo_2.png";
import { calculateTime, calcDays } from "../Services/dietCalculations";
import { calcRawDiets } from "../Services/dietCalcualtionsValue";
//Library for pdf converting:
import axios from "axios";
import { saveAs } from "file-saver";

////
let time23 = "T23:59:59";
let time0 = "T00:00:00";
export default class Highorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountries: [],
      selectValue: "pln",
      startDate: "2020-06-03", //new Date().toISOString().substr(0, 10),
      startTime: "00:00", //new Date().toISOString().substr(11, 5),
      startDateAbroad: "2020-06-03", // new Date().toISOString().substr(0, 10),
      startTimeAbroad: "00:00", //new Date().toISOString().substr(11, 5),
      stopDate: "2020-06-03", //new Date().toISOString().substr(0, 10),
      stopTime: "00:00", //new Date().toISOString().substr(11, 5),
      stopDateAbroad: "2020-06-03", //new Date().toISOString().substr(0, 10),
      stopTimeAbroad: "00:00", //new Date().toISOString().substr(11, 5),
      bid: 1,
      dietOut: 30,
      dietPL: 30,
      accommodation: 0,
      country: { country: "Polska" },
      countryData: {},
      currency: "PLN",

      rodzaj_wydatku: "No transport",
      kasa: 0,
      test_Array: [1, 2],
      expenses: [],
      tempDeleteIndex: 0,
      showStyle: { visibility: "hidden" },
      amountdietPL: 0,
      amountDietOutInPLN: 0,
      sumOfDiet: 0,
      dietSum: 0,
      diet: 30,
      breakfastAmount: 0,
      dinnerAmount: 0,
      supperAmount: 0,
      amountOtherCurrency: 0,
      // Traveler data:
      name: "",
      surname: "",
      campany: "",
      delegationNumber: "",
      transport: "",
      comments: "",
      startPlace: "",
      destination: "",
      endPlace: "",
      travelPurpose: "",
      //Meals Cost
      mealsCost: 0,
      totalCost: 0,

      totalExpenses: 0,
      employeeTotalCost: 0,
      employerrReturnCost: 0,
      campanyCardCosts: 0,
      campanyTransfer: 0,
      sumOfDietMinusMeals: 0,
      //
      currencyRateDate: new Date().toISOString().substr(0, 10),
      totalAdvance: 0,
      ///
      showAbroadDate: styleButton1,
      //Refactoring:
      timeArray: { timeDelPL: [], timeDelAbroad: [] }, // bede liczyl ile max jest sniadan i innych
    };
  }
  //Printing expense sheet to PDF
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
  ////////////////
  addExpense = (name) => {
    let tempExpenses = [...this.state.expenses];
    console.log(this.state.expenses);
    let test = new Promise(function (resolve, reject) {
      resolve("Just to make promise");
    });
    test
      .then(() => {
        tempExpenses.push(name);
        this.setState({ expenses: tempExpenses });
      })
      .then(() => {
        //this.calcExpenses();
      });
    // console.log("Funkcja przeslana z parametrem name: ", name);
    // tempExpenses.push(name);
    // this.setState({ expenses: tempExpenses });
  };
  deleteExpense = (event) => {
    let objectID = event.target.id;
    let tempArray = this.state.expenses;
    tempArray.splice(objectID, 1);
    this.setState({ expenses: tempArray });
  };

  showEditor = () => {
    this.setState({ showStyle: showEditor });
  };
  hideEditor = () => {
    this.setState({ showStyle: hideEditor });
  };
  showAbraodDate = () => {
    this.setState({ showAbroadDate: styleButton2 });
  };
  hideAbraodDate = () => {
    this.setState({ showAbroadDate: styleButton1 });
  };

  handleStateChange = (event) => {
    let name = event.target.name;
    var cc = event.target.value;
    let test = new Promise(function (resolve, reject) {
      console.error("Wchodzimy doi promise");
      resolve();
    });
    test
      .then(() => {
        this.setState({ [name]: cc });
        console.log("Jestesmy w pierwszym then: ");
      })
      .then(() => {
        this.testHandleDiffDateAbroad();
      })
      .then(() => {
        //this.calcExpenses();
      });
  };
  componentDidMount() {
    getAllCountries().then((country) => {
      this.setState({ allCountries: country });
      console.log(this.state.allCountries);
    });
    allNBPCurrency(this.state.selectValue, this.state.currencyRateDate).then(
      (element) => {
        console.log("Currency get from BNP", element);
        this.setState({ bid: element.rates[0].bid });
      }
    );
    // this.testHandleDiffDateAbroad();
    // this.calcExpenses();
  }

  currencyDateChange = (event) => {
    let curent = event.target;
    let currency = this.state.currencyRate;
    let changePromise = new Promise(function (resolve, reject) {
      console.log("Co pobralem", curent.name);
      console.log("Co Warrtość?", curent.value);

      resolve(curent.value);
    });
    changePromise.then((result) => {
      console.log(result);
      this.setState({ currencyRateDate: result });
      console.log("Waluta:" + this.state.currency);
      allNBPCurrency(this.state.currency, result)
        .then((element) => {
          console.log("Currency get from BNP", element);
          this.setState({ bid: element.rates[0].bid });
          console.log("Wartosc walut w dniu to: ", element.rates[0].bid);
        })
        .then(() => {
          this.testHandleDiffDateAbroad();
        })
        .then(() => {
          //this.calcExpenses();
        });
    });
  };
  // Zmiana w dropdown liscie
  handleChange = (event) => {
    var cc = event.target;
    var ccValue = event.value;
    var test = new Promise(function (resolve, reject) {
      console.error("Sprawdzam teraz tablice wszystkich krajów");
      resolve();
    });
    test
      .then((result) => {
        const foundCountry = this.state.allCountries.find((element) => {
          if (cc.value === element.code) {
            console.log("Znalazlem element w tablicy!", element);
            return element;
          }
        });
        console.log("Znalezione i przekazane", foundCountry);
        this.setState({ country: foundCountry });
        console.log("To ustawiam do state:", this.state.country);
        return foundCountry;
      })
      .then((result) => {
        console.log("A tutaj w drugim then: ", result);
        const foundCountry = 0;
        this.setState({ diet: result.value });
        if (result.code !== "pl") {
          allNBPCurrency(result.currency, this.state.currencyRateDate).then(
            (element) => {
              console.log("Data from NBP:", element);
              this.setState({
                bid: element.rates[0].bid,
                currency: result.currency,
              });
              this.testHandleDiffDateAbroad();
              //this.calcExpenses();
            }
          );
        } else {
          this.setState({
            bid: 1.0,
            currency: "PLN",
          });
        }
        return this.state.bid;
      })
      .then((result) => {
        console.log("Czemu nie mam state???", result);
        this.testHandleDiffDateAbroad();
        console.log("Nazwa kraju? ", this.state.country.code);
        this.styleChange();
      });
  };
  styleChange = () => {
    console.log("Nazwa kraju? ", this.state.country.code == "pl");
    if (this.state.country.code == "pl") {
      this.hideAbraodDate();
    } else {
      this.showAbraodDate();
    }
  };

  showCountryList = () => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("activeASD");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
    // z,oemoc na coś tam chyba
  };

  testHandleDiffDateAbroad = () => {
    const timePromise = new Promise((resolve, reject) => {
      const calcTimeResult = calcDays(
        this.state.startDate,
        this.state.startTime,
        this.state.startDateAbroad,
        this.state.startTimeAbroad,
        this.state.stopDateAbroad,
        this.state.stopTimeAbroad,
        this.state.stopDate,
        this.state.stopTime,
        this.state.country.country
      );
      if (calcTimeResult.length != 0) {
        this.setState({
          timeArray: {
            timeDelPL: calcTimeResult[0],
            timeDelAbroad: calcTimeResult[1],
          },
        });
        resolve(calcTimeResult);
      }
    });
    timePromise.then((res) => {
    // Obliczanie kosztow delegacji
      const delegationCosts = calcRawDiets(
        this.state.timeArray.timeDelPL,
        this.state.timeArray.timeDelAbroad,
        this.state.diet,
        this.state.bid,
        0,
        0,
        0,
        this.state.breakfastAmount,
        this.state.dinnerAmount,
        this.state.supperAmount
      );
      return delegationCosts;
    })
    .then((res)=>{
      console.warn("Sprawdzam: ",res)
      // ustawianie kosztow delegacji do state!
    });
  };

  
  handleInputStartDate = (event) => {
    this.setState({ startDate: event.target.value });
  };

  render() {
    if (this.state.allCountries.length === 0) {
      return <div>Lol pusto teraz</div>;
    } else {
      const CountriesSelect = this.state.allCountries.map((element) => {
        if (element.code === "pl") {
          return (
            <Option
              code={element.code}
              country={element.country}
              selected="selected"
              country={element.country}
            />
          );
        }
        return <Option code={element.code} country={element.country} />;
      });

      const expensesArray = this.state.expenses.map((element, index) => {
        return (
          <tbody>
            <tr>
              <td>{element.type}</td>
              <td>{element.date}</td>
              <td>{element.totalCost} zł</td>
              <td>{element.paymentOption}</td>
              <td>
                <button id={index} onClick={this.deleteExpense}>
                  Usuń
                </button>
              </td>
            </tr>
          </tbody>
        );
      });
      let testTAble = "";
      if (this.state.expenses.length > 0) {
        testTAble = (
          <table className="calculator-date-table">
            <thead>
              <tr>
                <th className="calculator-date-th">Rodzaj wydatku</th>
                <th className="calculator-date-th">Data</th>
                <th className="calculator-date-th">Kwota</th>
                <th className="calculator-date-th">Typ płatności</th>
                <th className="calculator-date-th">Usuń</th>
              </tr>
            </thead>
            {expensesArray}
          </table>
        );
      }

      return (
        <div className="container-calculator">
          <section className="conteiner-text alert-secondary calculator-info">
            <p className="calculator-info-p">
              Kalkulator kosztów delegacji wyliczy kwotę należnej diety lub
              rozliczy całą delegację. Podaj tylko dane podróży i... gotowe!
              Jeśli chcesz rozliczyć delegację zagraniczną wielokrajową lub
              zapamiętać dane rozliczenia, zapraszamy do kalkulatora!
            </p>
            <img className="calculator-info-img" src={Logo2} />
          </section>
          <div className="conteiner-text alert-secondary">
            <section className="section-style">
              <h2>Rozliczanie delegacji</h2>
              <p>
                Wprowadź potrzebne dane. Po uzupełnieniu wszystkich potrzebnych
                informacji pobierz plik pdf z gotowym rozliczeniem. Wydrukuj go,
                dołącz do dokumentacji lub przekaż księgowości.
              </p>
            </section>

            <section className="section-style">
              <h3>Podróż</h3>
              <div className="container-date test">
                <table className="calculator-date-table">
                  <thead>
                    <tr>
                      <th className="calculator-top-th" colspan="2">
                        <span>Data od</span>
                      </th>
                      <th className="calculator-top-th" colspan="2">
                        <span>Data do</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <InputDate
                        name="startDate"
                        type="date"
                        value={this.state.startDate}
                        handleChange={this.handleStateChange}
                        max={new Date().toISOString().substr(0, 10)}
                      />
                      <InputDate
                        name="startTime"
                        type="time"
                        value={this.state.startTime}
                        handleChange={this.handleStateChange}
                      />
                      <InputDate
                        name="stopDate"
                        type="date"
                        value={this.state.stopDate}
                        handleChange={this.handleStateChange}
                        min={this.state.startDate}
                      />
                      <InputDate
                        name="stopTime"
                        type="time"
                        value={this.state.stopTime}
                        handleChange={this.handleStateChange}
                      />
                    </tr>
                  </tbody>
                </table>
              </div>
              <button onClick={this.testHandleDiffDateAbroad}>
                Sprawdz delegacje
              </button>
              <p>
                Wybierz kraj delegacji: &nbsp;
                <select id="selColor" onChange={this.handleChange}>
                  {CountriesSelect}
                </select>
              </p>
              <div
                className="content container-date"
                style={this.state.showAbroadDate}
              >
                <table className="calculator-date-table">
                  <thead>
                    <tr>
                      <th className="calculator-top-th" colspan="2">
                        <span>Data wyjazdu za granicę</span>
                      </th>
                      <th className="calculator-top-th" colspan="2">
                        <span>Data powrotu z zagranicy</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <InputDate
                        name="startDateAbroad"
                        type="date"
                        value={this.state.startDateAbroad}
                        handleChange={this.handleStateChange}
                        min={this.state.startDate}
                        max={this.state.stopTime}
                      />
                      <InputDate
                        name="startTimeAbroad"
                        type="time"
                        value={this.state.startTimeAbroad}
                        handleChange={this.handleStateChange}
                      />
                      <InputDate
                        name="stopDateAbroad"
                        type="date"
                        value={this.state.stopDateAbroad}
                        handleChange={this.handleStateChange}
                        min={this.state.startDateAbroad}
                        max={this.state.stopDate}
                      />
                      <InputDate
                        name="stopTimeAbroad"
                        type="time"
                        value={this.state.stopTimeAbroad}
                        handleChange={this.handleStateChange}
                      />
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="section-style">
              <h3>Liczba posiłków zapewnionych podczas podróży</h3>
              <Meals handleChange={this.handleStateChange} />
            </section>
            <section className="section-style">
              <h3>Kalkulacja diety</h3>
              <DietCalculator
                countryDiet={this.state.amountdietPL}
                foreignDiet={this.state.amountOtherCurrency}
                foreignCurrency={this.state.currency}
                sumDiet={this.state.sumOfDietMinusMeals}
              />
            </section>
            <section className="section-style">
              <h3>Informacje dodatkowe</h3>
              <p>
                Dane w tej sekcji nie są obowiązkowe. Jeśli je uzupełnisz
                pojawią się na formularzu rozliczenia delegacji.
              </p>
              <Traveler
                name={this.state.name}
                surname={this.state.surname}
                campany={this.state.campany}
                delegationNumber={this.state.delegationNumber}
                transport={this.state.transport}
                comments={this.state.comments}
                startPlace={this.state.startPlace}
                destination={this.state.destination}
                endPlace={this.state.endPlace}
                handleChange={this.handleStateChange}
              />
            </section>
            <section className="section-style">
              <h3>Wydatki</h3>
              {testTAble}
              <button onClick={this.showEditor}>Dodaj wydatek</button>
              <div className="expense-input-date">
                Data kursu waluty:
                <input
                  type="date"
                  id="start"
                  name="currencyRateDate"
                  min="2012-01-01"
                  max={new Date().toISOString().substr(0, 10)}
                  onChange={this.currencyDateChange}
                  value={this.state.currencyRateDate}
                />
              </div>
            </section>
            <section className="section-style">
              <h3>Podsumowanie:</h3>

              <br />
              <DelegationSumup
                totalCost={this.state.totalExpenses}
                empleyeeCost={this.state.employeeTotalCost}
                advanceCost={this.state.totalAdvance}
                employeeReturnCost={this.state.employerrReturnCost}
                campanyCardCost={this.state.campanyCardCosts}
                campanyTransferCost={this.state.campanyTransfer}
              />
            </section>
            <h3>Drukuj rozliczenie do PDF</h3>
            <button onClick={this.createAndDownloadPdf}>Download PDF</button>
            <br />
          </div>
          <ExpenseEditor
            addEvent={this.addExpense}
            style={this.state.showStyle}
            hideEditor={this.hideEditor}
          />
          <div>
            <p>CO tam mamy?</p>

            <p>Wartość diety w obcym {this.state.amountOtherCurrencyN}</p>
            <p>Wartość diety w PLN {this.state.sumOfDiet}</p>
            <p>Wartość diety w PLN {this.state.sumOfDietMinusMeals}</p>
            <p></p>
          </div>
        </div>
      );
    }
  }
}

const styleButton1 = {
  maxHeight: null,
  //visibility: "hidden",
};
const hideEditor = {
  visibility: "hidden",
};
const showEditor = {
  visibility: "visible",
};
const styleButton2 = {
  //visibility: "visible",
  maxHeight: "200px",
};
