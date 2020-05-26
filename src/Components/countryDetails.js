import React ,{ Component } from 'react';

export default class Poster extends Component
{

    constructor(props) {
        super(props);
        
      }

prepareSymbol=()=>{
    let code= this.props.currency.toUpperCase();
    if(this.props.currency=="pl")
    {
        return code + " (zł)"
    }
    else if(this.props.currency=="usd" || this.props.currency=="aud"|| this.props.currency=="cad")
    {
        return code + " ($)" 
    }
    else if(this.props.currency=="eur")
    {
        return code + " (€)" 
    }
    else if(this.props.currency=="dkk")
    {
        return code + " (kr)" 
    }
    else if(this.props.currency=="jpy")
    {
        return code + " (¥)" 
    }
    else if(this.props.currency=="nok")
    {
        return code + " (kr)" 
    }
    else if(this.props.currency=="sek")
    {
        return code + " (kr)" 
    }
    else if(this.props.currency=="chf")
    {
        return code + " (fr)" 
    }
    else if(this.props.currency=="gbp")
    {
        return code + " (£)" 
    }

}
    render()
    {
        return(
           
            <tr className={this.props.class+ " tr-border"}>
                        <td className="country-name-text">
                            <span>{this.props.country}</span>
                        </td>
                        <td className="text-center">
                            <span>{this.props.cash}</span>
                        </td>
                        <td className="text-center">
                            <span>{this.props.accom}</span>
                        </td>
                        <td className="text-center">
        <span>{this.prepareSymbol()}</span>
                           
                        </td >
                        
                    </tr>         
        )
    }
}

export  const TableHeader = () =>
{
    return(
        <tr className="title ">
            <th className="th-details-name country-name-text"><span>Kraj</span></th>
            <th  className="th-details text-center"><span>Dieta</span></th>
            <th className="th-details text-center"><span>Nocleg</span></th>
            <th className="th-details text-center"><span>Waluta</span></th>
        </tr>
        
    )
}
