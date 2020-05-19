import React, { Component } from "react";
import InputDate from "../Components/inputDate";
import { getAllCountries } from "../Services/travelCosts";
import Option from "../Components/selects";
import { allNBPCurrency } from "../Services/servicurrency";
import Form from "../Components/Form";
import Expense from "./expenditure";
import ExpenseEditor from "./expenseEditor";
export default class Highorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountries: [],
      selectValue: "eur",
      startDate: "",
      stopDate: "",
      bid: 0,
      diet: 0,
      accommodation: 0,
      country: {},
      countryData: {},
      currency: "",

      name: "Jaroslaw",
      surname: "Lucjan",
      rodzaj_wydatku: "No transport",
      kasa: 0,
      test_Array: [1, 2],
      expenses: [],
      tempDeleteIndex:0,
      
    };
  }
  addExpense=(name)=>{
    let tempExpenses = [...this.state.expenses]
    console.log("Funkcja przeslana z parametrem name: ",name);
    tempExpenses.push(name);
    this.setState({expenses:tempExpenses});
  }
deleteExpense = (event)=>{
let objectID = event.target.id;
let tempArray = this.state.expenses;
tempArray.splice(objectID,1);
this.setState({expenses: tempArray});

}

  myFunction(params){
    let tempExpenses = [...this.state.expenses]
    tempExpenses.push(params)
    this.setState({expenses:tempExpenses});
  }
  tempAddArray = () => {
    let tempArray = [...this.state.test_Array];
    let lastIndex = this.state.test_Array.length;
    console.log("Tablica nowa to:", tempArray, "Dlugosc to:", lastIndex);
    tempArray.push(lastIndex + 1);
    this.setState({ test_Array: tempArray });
  };
  tempDeleteArray = () => {
    let tempArray = [...this.state.test_Array];
    let deleteIndex = this.state.tempDeleteIndex;
    console.log("Z tablicy::", tempArray, "Usuwam index:", deleteIndex, "o wartosci: ",tempArray[deleteIndex]);
    tempArray.splice(deleteIndex,1)
    this.setState({ test_Array: tempArray });
    console.log(tempArray)
  };
  tempAddExpense = ()=>{
    let tempExpenses = [...this.state.expenses];
    let lastIndex = tempExpenses.length;
    
    tempExpenses.push({type: "Hotel",cost: 500});
    this.setState({expenses: tempExpenses});
    console.log("Tablica nowa to:", tempExpenses, "Dlugosc to:", lastIndex);
  }

  handleStateChange = (event) => {
    let name = event.target.name;
    var cc = event.target.value;
    this.setState({ [name]: cc });
    console.log("Dokonało się", this.state.tempDeleteIndex);
    
  };
  componentDidMount() {
    getAllCountries().then((country) => {
      this.setState({ allCountries: country });
      console.log(this.state.allCountries);
    });
    allNBPCurrency(this.state.selectValue).then((element) => {
      console.log("Currency get from BNP", element);
      this.setState({ bid: element.rates[0].bid });
    });
  }

  // Zmiana w dropdown liscie
  handleChange = (event) => {
    var cc = event.target;
    var test = new Promise(function (resolve, reject) {
      console.error("Sprawdzam teraz tablice wszystkich krajw");
      resolve("First promise done");
    });
    test
      .then((result) => {
        
        const foundCountry = this.state.allCountries.find((element) => {
          if (cc.value === element.code) {
            console.log("Znalazlem element w tablicy!", element);
            return element;
          }
        });
        this.setState({ country: foundCountry });
        return foundCountry;
      })
      .then((result) => {
        console.log("Atutaj w drugim then: ", result);
        allNBPCurrency(result.currency).then((element) => {
          console.log("Data from NBP:", element);
          this.setState({
            bid: element.rates[0].bid,
            currency: result.currency,
          });
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
      const CountiesSelect = this.state.allCountries.map((element) => {
        return <Option code={element.code} country={element.country} />;
      });

const test_Object = this.state.test_Array.map((element,index)=>{
  return <div id={index}>{element}</div>
});
const expensesArray = this.state.expenses.map((element,index)=>{
return <div > typ: {element.type}, data: {element.date}, kwota: {element.amount} zł<button id={index} onClick={this.deleteExpense}>Usuń</button> <button id={index} onClick={this.deleteExpense}>Edit</button></div>
})
      
      return (
        <div className="container-contact">
          <h1>Lista wydatków:</h1>
         {expensesArray}<br/>
         <button>Dodaj kolejny wydatek z podróży służbowej</button>
         Sprawdzam<br/>

          <ExpenseEditor addEvent = {this.addExpense}/>
          {/* Krajowy
          <InputDate handleChange={this.handleInputStartDate} />
          Krajowy
          <InputDate /> */}
          <select id="selColor" onChange={this.handleChange}>
            {CountiesSelect}
          </select>
          <h3>
            Nazwisko: {this.state.surname} <br />
            Imie: {this.state.name}
          </h3>
          <Form
            name="name"
            surname="surname"
            handleStateChange={this.handleStateChange}
          />
          <p>Sprawdzamy jak wystawic i dodac wydatki:</p>
          <Expense
            name="kasa"
            handleStateChange={this.handleStateChange}
            onChangeList={this.handleStateChange}
            objName="rodzaj_wydatku"
          />
          <div style={divStyle}>
            Imie: {this.state.name}
            <br />
            Nazwisko: {this.state.surname}
            <br />
            Wydatek: {this.state.kasa}
            <br />
            Rodzaj wydatku:: {this.state.rodzaj_wydatku}
            <br />
          </div>
        </div>
      );
    }
  }
}
const divStyle = {
  color: "yellow",
  background: "red",
  width: "100%",
  height: "100px",
};
