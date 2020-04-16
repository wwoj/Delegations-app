import React, { Component } from "react";
import InputDate from "../Components/inputDate";
import { getAllCountries } from "../Services/travelCosts";
import Option from "../Components/selects";
import {allNBPCurrency} from '../Services/servicurrency';
export default class Calculate extends Component {

  hgw1 = ()=> new Promise(function(resolve, reject) {
    resolve('Success!');
  });

  constructor(props) {
    super(props);
    this.state = { allCountries: [], selectValue:"eur", startDate:"",stopDate:"", bid: 0 };
  }
  componentDidMount() {
    getAllCountries().then((country) => {
      this.setState({ allCountries: country });
      
      });
      allNBPCurrency(this.state.selectValue)
      .then((element)=>{
          console.log("Currency get from BNP",element);
          this.setState({bid:element.rates[0].bid});
      })
      
  }

  updateText = () => {
    console.log("Value state currency",this.state.selectValue)
  };
  promiseTest = () => {
    promise1.then(function(value) {
        console.log("Promise Test!");
        console.warn(value);
        
        // expected output: "Success!"
      })
      .then(()=>{
        console.log("Promise test function done")
      });
  };
  updateText1 = () => {
  
    console.log("Calendar value:",this.state.startDate)
  };

  handleChange = (event) => {
    this.setState({ selectValue: event.target.value })

    allNBPCurrency(this.state.selectValue)
    .then((element)=>{
        console.log("Data from NBP:",element);
        this.setState({bid:element.rates[0].bid});
    })
    console.log("Currency from dropdown list: ",event.target.value)
    console.log("Currency from state: ",this.state.selectValue)
  };
  handleInputStartDate = (event) => {
    this.setState({ startDate: event.target.value });
  };
  render() {
    if (this.state.allCountries.length === 0) {
      return <div>Lol pusto teraz</div>;
    } else {
        const CountiesSelect = this.state.allCountries.map((element)=>{
           return ( <Option code = {element.currency} country={element.country}/>)
        })
      return (
        <div className="container-contact">
          {/* <InputDate  handleChange={this.handleInputStartDate}/>
          <InputDate /> */}
          
          <select id="selColor" onChange={this.handleChange}>
            {CountiesSelect}
            {/* <option value="nothing-selected" selected="selected">Choose</option> */}
          </select>
          <button onClick={this.updateText}>Sprawdz wartosc okej??</button>
          <button onClick={this.updateText1}>Sprawdz mi cene</button>
          <button onClick={this.promiseTest}>Sprawdz promise</button>
          <p>{this.state.bid}</p>
        </div>
      );
      }
  }
}
function testFun(val) 
{
  console.warn("Inside function in promise")
  return "user not make it: "+val;
}
const promise1 = new Promise(function(resolve, reject) {
   

    resolve(testFun("test message"));
  });

 