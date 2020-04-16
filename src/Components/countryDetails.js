import React ,{ Component } from 'react';

export default class Poster extends Component
{

    constructor(props) {
        super(props);
        
      }


    render()
    {
        return(
            <div className="details-container">
                <div className="country-name border-left">
                <h2>
                {this.props.country}
                </h2>
                </div>
                <div className="country-cash border-left">
                <h2>
                {this.props.cash}
                </h2>
                </div>
                <div className="country-accomodation border-left">
                <h2>
                {this.props.accom}
                </h2>
                </div>
            </div>
        )
    }
}

export  const TableHeader = () =>
{
    return(
        <div className="details-top-container">
                <div className="country-name border-left">
                <h2>
                Nazwa kraju
                </h2>
                </div>
                <div className="country-cash border-left">
                <h2>
                Dieta
                </h2>
                </div>
                <div className="country-accomodation border-left">
                <h2>
                Nocleg
                </h2>
                </div>
            </div>
    )
}
