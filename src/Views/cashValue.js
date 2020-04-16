import React, { Component } from "react";
import Details, {TableHeader} from "../Components/countryDetails";
import { getAllCountries } from "../Services/travelCosts";
import Loading from "../Components/loading";
export default class CashValue extends Component {
  constructor(props) {
    super(props);
    this.state = { allCountries: [] };
  }

  componentDidMount() {
    getAllCountries().then((country) => {
      this.setState({ allCountries: country });
      console.log(this.state.allCountries);
    });
  }
  render() {
    console.log("Dlugosc tego czegos? : ", this.state.allCountries.length);
    if (this.state.allCountries.length === 0) {
      return <Loading />;
    } else {
      const CountriesInfo = this.state.allCountries.map((element) => {
        return (
          <div className="container-contact">
              
            <Details
              country={element.country}
              cash={element.value}
              accom={element.accom}
              key={element.code}
            />
          </div>
        );
      });
      return <div className="countires-container">
          <div className="table-container">
              <TableHeader/>
              {CountriesInfo}
              </div></div>;
    }
  }
}
