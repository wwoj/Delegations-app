// tutaj bedziemy miec funkcje ktore przyjmują parametry i będą obliczać wartoś dniety?


export function calcRawDiets(polandTime, abroadTime, dietValue, currencyRate,breakfastPL,dinnerPL,supperPL,breakfastAbroad,dinnerAbroad,supperAbroad) {
  let result={dietRawPl:0, dietPL:0, dietRawAbroad:0,dietAbroad:0,dietRawAbroadInPLN:0,dietAbroadInPLN:0,dietSumup:0}
  let sumPlTime = 0;
  let sumAbroadTime = 0;
  //Obliczanie diety dla Polski
  polandTime.forEach((element) => {
    sumPlTime += element;
  });
  //Obliczanie diety zagranicznej
  abroadTime.forEach((element) => {
    sumAbroadTime += element;
  });

  let dietRawPL= sumPlTime*30;
  let dietPL =  parseFloat((dietRawPL-(breakfastPL*0.15+0.5*(dinnerPL+supperPL))*30).toFixed(2));
  let dietRawAbroad=  parseFloat((sumAbroadTime*dietValue).toFixed(2));
  let dietAbroad=  parseFloat((dietRawAbroad-(breakfastAbroad*0.15+0.5*(dinnerAbroad+supperAbroad))*dietValue).toFixed(2));
  let dietRawAbroadInPLN= parseFloat((dietRawAbroad*currencyRate).toFixed(2));
  let dietAbroadInPLN=  parseFloat((dietAbroad*currencyRate).toFixed(2));
  let dietSumup = dietPL+dietAbroadInPLN


  result.dietRawPl = dietRawPL;
  result.dietPl = dietPL;
  result.dietRawAbroad = dietRawAbroad;
  result.dietAbroad = dietAbroad;
  result.dietRawAbroadInPLN = dietRawAbroadInPLN;
  result.dietAbroadInPLN = dietAbroadInPLN;
  result.dietSumup = dietSumup;

console.log("PL: Dieta surowa:",result.dietRawPl,"po odjeciu jedzenia:",result.dietPl);
console.log("Zagraniczne: Dieta surowa:",result.dietRawAbroad,"Po przeliczeniu na zł",result.dietRawAbroadInPLN,"po odjeciu jedzenia:",result.dietAbroad,"po przeliczeniu na zl:",dietAbroadInPLN);
console.warn("Suma diet: ",result.dietSumup)

return result;
}
// Możemy zwrocić całą tablice albo obiekt ktory będzie zawierał:
//---Całą diete w PL
//---Całą diete zagraniczna w EUR albo USD alb cokolwiek
//---Całą diete zagraniczą w PLN
//---Diete Polską pomniejszoną o posilki w PL
//---Diete Zagraniczną pomniejszoną o posilki zagraniczne