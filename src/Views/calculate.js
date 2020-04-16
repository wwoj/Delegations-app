import React, { Component } from "react";
import InputDate from "../Components/inputDate";
import { getAllCountries } from "../Services/travelCosts";
import Option from "../Components/selects";
import {allNBPCurrency} from '../Services/servicurrency';
export default class Calculate extends Component {
  constructor(props) {
    super(props);
    this.state = { allCountries: [], selectValue:"usd", startDate:"",stopDate:"" };
  }
  componentDidMount() {
    getAllCountries().then((country) => {
      this.setState({ allCountries: country });
      });
  }
  updateText = () => {
   
    console.log("Wartosc czegos tam:",this.state.selectValue)

  };
  updateText1 = () => {
  
    console.log("Wartosc czegos tam:",this.state.startDate)
  };
  handleChange = (event) => {
    this.setState({ selectValue: event.target.value });
    allNBPCurrency(this.state.selectValue)
    .then((element)=>{
        console.log("WOOW",element);
    })
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
          <InputDate  handleChange={this.handleInputStartDate}/>
          <InputDate />
          Kalkulator?
          <select id="selColor" onChange={this.handleChange}>
            {CountiesSelect}
            {/* <option value="nothing-selected" selected="selected">Choose</option> */}
          </select>
          <button onClick={this.updateText}>Sprawdz wartosc okej??</button>
          <button onClick={this.updateText1}>Sprawdz mi cene</button>
        </div>
      );
      }
  }
}
