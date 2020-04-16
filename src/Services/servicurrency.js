const BANKADDRESS = "https://api.nbp.pl/api/exchangerates/rates/c/";




export  function allNBPCurrency(currency)
{
    var url = BANKADDRESS + currency+"/";
    return fetch(url)
    .then(resp=>{
        console.error("Server status:",resp.status)
        return resp.json();
    })
}