const BANKADDRESS = "http://api.nbp.pl/api/exchangerates/rates/c/";
const BANKADDRESS1 = "http://api.nbp.pl/api/exchangerates/rates/c/";
const MIDRATEADDRESS = "http://api.nbp.pl/api/exchangerates/rates/a/";

export function allNBPCurrency(currency) {
  var url = BANKADDRESS + currency + "/";
  return fetch(url).then((resp) => {
    return resp.json();
  });
}

export function getRate(currency, date) {
  var url = BANKADDRESS1 + currency + "/" + date;
  return fetch(url)
    .then((resp) => {
      if (currency === "PLN") {
        return { rates: [{ bid: 1.0, ask: 1.0 }] };
      }
      return resp.json();
    })
    .catch((err) => {
      return { rates: [{ bid: 99.99, ask: 99.99 }] };
    });
}

export function getMidRate(currency, date) {
  var url = MIDRATEADDRESS + currency + "/" + date;
  return fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => {
      //No currency in NBP API
      return { rates: [{ mid: 9 }] };
    });
}
