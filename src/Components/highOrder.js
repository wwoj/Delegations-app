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
let time23 = "T23:59:59";
let time0 = "T00:00:00";
export default class Highorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountries: [],
      selectValue: "pln",
      startDate: new Date().toISOString().substr(0, 10),
      startTime: new Date().toISOString().substr(11, 5),
      startDateAbroad: new Date().toISOString().substr(0, 10),
      startTimeAbroad: new Date().toISOString().substr(11, 5),
      stopDate: new Date().toISOString().substr(0, 10),
      stopTime: new Date().toISOString().substr(11, 5),
      stopDateAbroad: new Date().toISOString().substr(0, 10),
      stopTimeAbroad: new Date().toISOString().substr(11, 5),
      bid: 1,
      dietOut: 30,
      dietPL: 30,
      accommodation: 0,
      country: {},
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
      sapperAmount: 0,
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
    };
  }
  addExpense = (name) => {
    let tempExpenses = [...this.state.expenses];
    let test = new Promise(function (resolve, reject) {
      resolve("Just to make promise");
    });
    test
      .then(() => {
        tempExpenses.push(name);
        this.setState({ expenses: tempExpenses });
      })
      .then(() => {
        this.calcExpenses();
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
        this.calcExpenses();
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
          this.calcExpenses();
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
              this.calcExpenses();
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

  showCountryList=()=>{
    var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activeASD");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
// z,oemoc na coś tam chyba
  }
  testHandleDiffDate = () => {
    // To set two dates to two variables

    // to jest dla delegacji polskiej
    let data1 = this.state.startDate;
    let time1 = this.state.startTime;
    let data2 = this.state.stopDate;
    let time2 = this.state.stopTime;
    var date1 = new Date(data1 + " " + time1 + ":00");
    var date1a = new Date(data1 + " 23:59:59");
    var date2a = new Date(data2 + " 00:00:00");
    var date3a = new Date(data2 + " " + time2 + ":00");

    var Difference_In_Time1 = date1a.getTime() - date1.getTime();
    var Difference_In_Days1a = (
      Difference_In_Time1 /
      (1000 * 3600 * 24)
    ).toFixed(2);
    console.warn("Roznica czasu to: ", Difference_In_Days1a);

    var Difference_In_Time2 = date2a.getTime() - date1a.getTime();
    var Difference_In_Days2a = (
      Difference_In_Time2 /
      (1000 * 3600 * 24)
    ).toFixed(0);
    console.warn("Roznica czasu to: ", Difference_In_Days2a);
    var Difference_In_Time3 = date3a.getTime() - date2a.getTime();
    var Difference_In_Days3a = (
      Difference_In_Time3 /
      (1000 * 3600 * 24)
    ).toFixed(2);
    console.warn("Roznica czasu to: ", Difference_In_Days3a);
    if (Difference_In_Days1a >= 0.33 && Difference_In_Days1a <= 0.5) {
      console.log("Przysluguje 0.5 diety");
    } else if (Difference_In_Days1a > 0.5) {
      console.log("Przysluguje cala dieta");
    } else {
      console.log("Nie Przysluguje dieta");
    }
  };

  testHandleDiffDateAbroad = () => {
    let dateStartPL = this.state.startDate;
    let timeStartPL = "T" + this.state.startTime;
    let dateStartAbroad = this.state.startDateAbroad;
    let timeStartAbroad = "T" + this.state.startTimeAbroad;
    let dateStopAbroad = this.state.stopDateAbroad;
    let timeStopAbroad = "T" + this.state.stopTimeAbroad;
    let dateStopPL = this.state.stopDate;
    let timeStopPL = "T" + this.state.stopTime;
    let currencyRate = this.state.bid;
    let dietValue = this.state.diet;
    let timeInPoland = [];
    let timeAbroad = [];
    let calcdietPL = 0;
    let calcdietOut = 0;

    // liczymy tylko polskie diety przed wyjazdem!
    if (dateStartPL !== dateStartAbroad) {
      //Sprawdeznie czasu zostal odo konca dnia w Polsce
      timeInPoland.push(
        calculateFullDays(dateStartPL, dateStartPL, timeStartPL, time23)
      );

      // // wyznaczanie kolejnej dnia daty
      // let datatoday = new Date(this.state.startDate);
      // let datatodays = datatoday.setDate(new Date(datatoday).getDate() + 1);
      // let todate = new Date(datatodays).toISOString().substr(0, 10);
      // console.log("Zmiana tego czasu toooo: ", todate);
      console.log(
        "Wyznaczanie diety podacz kolejnych dni delegacji przed wyjazdem:"
      );
      timeInPoland.push(
        calculateFullDays(dateStartPL, dateStartAbroad, time23, timeStartAbroad)
      );
    } else {
      //Wyjazd za granice tego samego dnia
      console.log("Wyjazd teog samego dnia");
      timeInPoland.push(
        calculateFullDays(
          dateStartPL,
          dateStartPL,
          timeStartPL,
          timeStartAbroad
        )
      );
    }
    /////////////////////////////Liczenie delegacji zagranicznej!!
    if (dateStartAbroad !== dateStopAbroad) {
      console.log("Delegacja za granica trwala dluzej niz 1 dzien");
      timeAbroad.push(
        calculateFullDays(
          dateStartAbroad,
          dateStartAbroad,
          timeStartAbroad,
          time23
        )
      );
      //Liczenie reszty dni:
      console.log("Liczba delegacji po pierwszym dniu:");
      timeAbroad.push(
        calculateFullDays(
          dateStartAbroad,
          dateStopAbroad,
          time23,
          timeStopAbroad
        )
      );
    } else {
      console.log("Czas powrotu z zagranicy tego samego dnia co wyjazd");
      timeAbroad.push(
        calculateFullDays(
          dateStartAbroad,
          dateStopAbroad,
          timeStartAbroad,
          timeStopAbroad
        )
      );
    }
    // Liczenie Delegacji koncowej w polsce po powrocie!
    // Zakonczenie delegacji tego samego dnia co powrot z zagranicy!
    if (dateStopAbroad !== dateStopPL) {
      console.log("Koniec delegacji pozniej niz powrot");
      timeInPoland.push(
        calculateFullDays(
          dateStopAbroad,
          dateStopAbroad,
          timeStopAbroad,
          time23
        )
      );
      timeInPoland.push(
        calculateFullDays(dateStopAbroad, dateStopPL, time23, timeStopPL)
      );
    } else {
      //Delegacja zakonczona tgo samego dnia
      console.log(
        "Zakonczenie delegacji tego samego dnia co powrot z zagranicy"
      );
      timeInPoland.push(
        calculateFullDays(
          dateStopAbroad,
          dateStopAbroad,
          dateStopPL,
          dateStopPL
        )
      );
    }

    console.log("Nasza tablicza Polska: ", timeInPoland);
    console.log("Nasza tablicza zagraniczna: ", timeAbroad);
    // Sumowanie Diet polsich:

    timeInPoland.forEach((element) => {
      calcdietPL += element;
    });
    console.log("Czas spędzony w polsce to: ", calcdietPL);
    timeAbroad.forEach((element) => {
      calcdietOut += element;
    });
    console.log("Czas spędzony za granica: ", calcdietOut);
    // Zwrocimy tylko duzo: diety w PL diety w Poza PL i sume.
    let plnDietPL = calcdietPL * 30;
    console.warn("Z PL: ", plnDietPL);
    let cashAbroat = (calcdietOut * dietValue).toFixed(2);
    console.warn("Waluta: ", currencyRate);
    console.warn("dieta: ", dietValue);
    console.warn("Z po przeliczeniu: ", cashAbroat);

    let cashAbroatToPLN = cashAbroat * currencyRate;
    let cashAboratRounded = cashAbroatToPLN.toFixed(2);
    let sumInPLN = (plnDietPL + cashAbroatToPLN).toFixed(2);
    let resPLN = parseInt(sumInPLN);
    console.log("Wynik sumy to: ", sumInPLN, ",typ: ", typeof sumInPLN);
    this.setState({
      amountdietPL: plnDietPL,
      amountdietOut: cashAboratRounded,
      amountOtherCurrency: cashAbroat,
      sumOfDiet: resPLN,
    });
    console.log(
      "Wynik sumy to: ",
      this.state.sumOfDiet,
      ",typ: ",
      typeof this.state.sumOfDiet
    );
  };

  calcExpenses = () => {
    //Obliczanie kosztów posiłków z diety
    var cosik = this.state.breakfastAmount;
    var cosik1 = this.state.dinnerAmount;
    var cosik2 = this.state.sapperAmount;
    let mealsTotalCost = 0;
    let employeeCosts = 0;
    let campanyCardCosts = 0;
    let campanyTransfer = 0;
    let advanceCost = 0;
    let _sumOfDietMinusMeals = 0;
    let _employeeTotalCost = 0;

    let _employerrReturnCost = 0;

    let _totalExpenses = 0;
    var test = new Promise(function (resolve, reject) {
      resolve("Send");
    });
    test
      .then((resu) => {
        cosik = this.state.breakfastAmount;
        cosik1 = this.state.dinnerAmount;
        cosik2 = this.state.sapperAmount;
        console.log(resu);
        console.warn(
          "woow:" + mealsTotalCost + " sniadania: " + cosik,
          " obiady:  " + cosik1 + " ,Kolacje:" + cosik2
        );
      })
      .then(() => {
        mealsTotalCost =
          this.state.bid *
          this.state.diet *
          (this.state.breakfastAmount * 0.15 +
            (parseInt(this.state.dinnerAmount) +
              parseInt(this.state.sapperAmount)) *
              0.3);
      })
      .then(() => {
        //Zapisywanie do state posiłków
        this.setState({ mealsCost: mealsTotalCost });
      })
      .then(() => {
        const expenses = this.state.expenses;
        employeeCosts = 0;
        campanyCardCosts = 0;
        campanyTransfer = 0;
        advanceCost = 0;
        expenses.forEach((element) => {
          console.log(element);
          if (element.paymentOption === "Pracownik") {
            employeeCosts += parseFloat(element.totalCost);
          } else if (element.paymentOption === "Karta firmowa") {
            campanyCardCosts += parseFloat(element.totalCost);
          } else if (element.paymentOption === "Przelew") {
            campanyTransfer += parseFloat(element.totalCost);
          } else if (element.type === "Zaliczka") {
            advanceCost += parseFloat(element.totalCost);
          }
        });
        console.warn(advanceCost);
      })
      .then(() => {
        _sumOfDietMinusMeals = (this.state.sumOfDiet - mealsTotalCost).toFixed(
          2
        );
        //Łączny koszt delegacji = diety - posiłki + wydatki poza zaliczkami
        _totalExpenses =
          this.state.sumOfDiet -
          mealsTotalCost +
          employeeCosts +
          campanyCardCosts +
          campanyTransfer;
        _employeeTotalCost =
          this.state.sumOfDiet - mealsTotalCost + employeeCosts;
        _employerrReturnCost = _employeeTotalCost - advanceCost;
      })
      .then(() => {
        this.setState({
          totalExpenses: _totalExpenses,
          employeeTotalCost: _employeeTotalCost,
          employerrReturnCost: _employerrReturnCost,
          campanyCardCosts: campanyCardCosts,
          campanyTransfer: campanyTransfer,
          sumOfDietMinusMeals: _sumOfDietMinusMeals,
          totalAdvance: advanceCost,
        });
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
          <tr>
            <td>Rodzaj wydatku</td>
            <td>{element.type}</td>
            <td>data</td>
            <td>{element.date}</td>
            <td>kwota</td>
            <td>{element.totalCost}</td>
            <td>zł</td>
            <td>typ płatności</td>
            <td>{element.paymentOption}</td>
            <td>
              <button id={index} onClick={this.deleteExpense}>
                Usuń
              </button>
            </td>
 
          </tr>
        );
      });
      let testTAble = "";
      if (this.state.expenses.length > 0) {
        testTAble = <table>{expensesArray}</table>;
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
            <img className="calculator-info-img" src={Logo2}/>
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
            <p>Podróż</p>
            <div className="container-date test">
              <table>
                <thead>
                  <tr>
                    <td>
                      <span>Data od</span>
                    </td>
                    <td>
                      <span>Data do</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <InputDate
                        nameDate="startDate"
                        nameTime="startTime"
                        handleChange={this.handleStateChange}
                        max={new Date().toISOString().substr(0, 10)}
                        placeHolderTime={this.state.startTime}
                        textData="Data od"
                      />
                      
                    </td>
                    <td>
                      <InputDate
                        nameDate="stopDate"
                        nameTime="stopTime"
                        handleChange={this.handleStateChange}
                        minDate={this.state.startDate}
                        minTime={this.state.startTime}
                        placeHolderTime={this.state.stopTime}
                        textData="Data do"
                      />
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          
          <p>
            Wybierz kraj delegacji: &nbsp;
            <select id="selColor" onChange={this.handleChange}>
              {CountriesSelect}
            </select>
          </p>
          <div className="content container-date" style={this.state.showAbroadDate}>
            <table>
              <thead>
                <tr>
                  <td>
                    <span>Data wyjazdu za granicę</span>
                  </td>
                  <td>
                    <span>Data powrotu z zagranicy</span>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <InputDate
                      nameDate="startDateAbroad"
                      nameTime="startTimeAbroad"
                      handleChange={this.handleStateChange}
                      minDate={this.state.startDate}
                      minTime={this.state.startTime}
                      maxDate={this.state.stopDate}
                      maxTime={this.state.stopTime}
                      max={new Date().toISOString().substr(0, 10)}
                      placeHolderTime={this.state.startTimeAbroad}
                      textData="Data wyjazdu za granicę"
                    />
                  </td>
                  <td>
                    <InputDate
                      nameDate="stopDateAbroad"
                      nameTime="stopTimeAbroad"
                      handleChange={this.handleStateChange}
                      minDate={this.state.startDateAbroad}
                      minTime={this.state.startTimeAbroad}
                      maxDate={this.state.stopDate}
                      maxTime={this.state.stopTime}
                      placeHolderTime={this.state.stopTimeAbroad}
                      textData="Data powrotu z zagranicy"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </section>
          <section className="section-style">
          <p>Liczba posiłków zapewnionych podczas podróży</p>
          <Meals handleChange={this.handleStateChange} />
          </section>
          <section className="section-style">
            <p>Kalkulacja diety</p>
          <DietCalculator
            countryDiet={this.state.amountdietPL}
            foreignDiet={this.state.amountOtherCurrency}
            foreignCurrency={this.state.currency}
            sumDiet={this.state.sumOfDietMinusMeals}
          />
          </section>
          <section className="section-style">
            <p>Informacje dodatkowe</p>
            <p>Dane w tej sekcji nie są obowiązkowe. Jeśli je uzupełnisz pojawią się na formularzu rozliczenia delegacji.</p>
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
          <p>Wydatki</p>
          {testTAble}
          <button onClick={this.showEditor}>Dodaj wydatek</button>
          <br />
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
          
          </section>
          <section className="section-style">
          <h1>Podsumowanie:</h1>
          
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
          <h1>Drukuj rozliczenie do PDF</h1>
          <button>Drukuj </button>
          <br/>
        </div>
        <ExpenseEditor
              addEvent={this.addExpense}
              style={this.state.showStyle}
              hideEditor={this.hideEditor}
            />
        </div>
      );
    }
  }
}

const styleButton1 = {
  maxHeight : null
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
  maxHeight : "100px"
};

function calculateFullDays(dateStart, dateStop, timeStart, timeStop) {
  let _date1 = new Date(dateStart + timeStart);
  let _date2 = new Date(dateStop + timeStop);
  let _diffValue = _date2.getTime() - _date1.getTime();
  let diff = (_diffValue / (1000 * 3600 * 24)).toFixed(2);
  //console.warn("Procent dnia spędzony w delegacji: ", diff);
  return parseFloat(diff);
}
