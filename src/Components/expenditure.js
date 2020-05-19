import React, { Component } from "react";



export default class Expense extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            amount:"",
            type:"",
        }
    }
    handleChange = (event)=>{
        let name = event.target.name;
        var cc = event.target.value;
        this.setState({[name]:cc})
        console.log("Dokonało się", this.state.amount);
        
    }
  render() {
    return (
      <div>
        Typ wydatku:
        <select onChange={this.props.onChangeList} name={this.props.objName}>
          <option value="none">...</option>
          <option value="Hotel">Hotel</option>
          <option value="Other">Inne</option>
          <option value="Train">Kolej</option>
          <option value="Nocleg">Nocleg</option>
          <option value="Small Car">Samochód prywatny do 900cm^2</option>
          <option value="Bigger Car">Samochód prywatny powyżej 900cm^2</option>
          <option value="Campany Car">Samochód służbowy</option>
          <option value="Airplane">Samolot</option>
          <option value="Taxi">Taxi</option>
          <option value="Advance">Zaliczka</option>
        </select>
        Wartosc:
        <input
          type="number"
          placeholder="Tutaj sprawdzamy"
          name="amount"
          onChange={this.handleChange}
          step="0.01"
        />
        Dodatkowa do sprawdzenia zewnetrznego
        <input
          type="number"
          placeholder="Tutaj poda wartosc state"
          name={this.props.name}
          onChange={this.props.handleStateChange}
          step="0.01"
        />
        <h1>{this.state.amount}</h1>
        
        
        
        <h1>Ile wyszlo za ten wydatek</h1>
        <select>
          <option value="employee">Pracownik</option>
          <option value="employer">Karta firmowa</option>
        </select>
      </div>
    );
  }
}
