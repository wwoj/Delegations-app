// Calculating values of diet for each day
let time23 = "T23:59:59";
let time0 = "T00:00:00";
// funkcja wyznacza ile czasu spedzilismy w danym przediale 
export function calculateTime(
  dateStart,
  dateStop,
  timeStart,
  timeStop,
  action
) {
  // 1- first day?
  // 2 - full days?
  let _date1 = new Date(dateStart + timeStart);
  let _date2 = new Date(dateStop + timeStop);
  console.log("Data 1", _date1);
   console.log("Data 2", _date2);
  let _diffValue = _date2.getTime() - _date1.getTime();
  let diff = (_diffValue / (1000 * 3600 * 24)).toFixed(2);
  // console.warn("Procent dnia spędzony w delegacji: ", diff);
  let result = 0;
  switch (action) {
    case 1: // tylko albo do pelnej delegacji albo do... koncowej
      if (diff < 0.333) {
        console.log("Brak diety");
        result = 0.0;
        return result;
      } else if (diff >= 0.333 && diff <= 0.5) {
        console.log("Przysługuje połowa diety");
        result = 0.5;
        return result;
      } else if (diff > 0.5 && diff <= 1) {
        console.log("Przysługuje plena dieta");
        result = 1;
        return result;
      } else if (diff > 1) {
        console.log("Przysługuje plena dieta plus dodatki");
        let newTekst = diff.split(".");
        let test1 = "0." + newTekst[1];
        console.log(test1);
        if (test1 <= 0.333 && test1 != 0) {
          console.log("Mniejsz niz 8h 05 diety");
          result = parseInt(newTekst[0]) + 0.5;
        } else if (parseFloat(test1) > 0.333) {
          console.log(test1);
          console.log("Wiecej niz 8h pelna dieta");
          result = parseInt(newTekst[0]) + 1;
        } else {
          result = parseInt(newTekst[0]);
        }
        console.log(newTekst);
      }
      else{
        console.log("Czas w delegacji był rowny 0");
        result = 0.0;
        return result;
      }
      break;

    case 2:// to jest do krajowego 
      {
        if (diff < 0.333) {
            console.log("Brak diety");
            result = 0.0;
            return result;
          } else if (diff >= 0.333 && diff <= 0.5) {
            console.log("Przysługuje połowa diety");
            result = 0.5;
            return result;
          } else if (diff > 0.5 && diff <= 1) {
            console.log("Przysługuje plena dieta");
            result = 1;
            return result;
          } else if (diff > 1) {
            console.log("Przysługuje plena dieta plus dodatki");
            let newTekst = diff.split(".");
            let test1 = "0." + newTekst[1];
            console.log(test1);
            if (test1 <= 0.333 && test1 != 0) {
              console.log("Mniejsz niz 8h 05 diety");
              result = parseInt(newTekst[0]) + 0.5;
            } else if (parseFloat(test1) > 0.333 &&test1 <= 0.5) {
              console.log(test1);
              console.log("Połowa diety");
              result = parseInt(newTekst[0]) + 0.5;
            }else if (parseFloat(test1) > 0.5) {
                console.log(test1);
                console.log("Pełna dieta diety");
                result = parseInt(newTekst[0]) +1;
                
              
            }
            else{
                result = parseInt(newTekst[0]);
            }
            console.log(newTekst);
          }
          else{
            console.log("Czas w delegacji był rowny 0");
            result = 0.0;
            return result;
          }
          break; 
      }
      case 3:// to jest do delegacji zagranicznej
      {
        if (diff < 0.333 && diff!=0 ) {
            console.log("Mniej niż 8h za granica");
            result = 0.333;
            return result;
          } else if (diff >= 0.333 && diff <= 0.5) {
            console.log("Przysługuje połowa diety  zagranicznej");
            result = 0.5;
            return result;
          } else if (diff > 0.5 && diff <= 1) {
            console.log("Przysługuje plena dieta  zagranicznej");
            result = 1;
            return result;
          } else if (diff > 1) {
            console.log("Przysługuje plena dieta plus dodatki  zagranicznej");
            let newTekst = diff.split(".");
            let test1 = "0." + newTekst[1];
            console.log(test1);
            if (test1 <= 0.333 && test1 != 0) {
              console.log("Mniejsz niz 8h 05 diety  zagranicznej");
              result = parseInt(newTekst[0]) + 0.333;
            } else if (parseFloat(test1) > 0.333 &&test1 <= 0.5) {
              console.log(test1);
              console.log("Połowa diety  zagranicznej");
              result = parseInt(newTekst[0]) + 0.5;
            }else if (parseFloat(test1) > 0.5) {
                console.log(test1);
                console.log("Pełna dieta diety  zagranicznej");
                result = parseInt(newTekst[0]) +1;
                
              
            }
            else{
                result = parseInt(newTekst[0]);
            }
            console.log(newTekst);
          }
          else{
            console.log("Czas w delegacji był rowny 0");
            result = 0.0;
            return result;
          }
          break;
        }
        case 4:// to jest do delegacji zagranicznej
        {
          if (diff < 0.333 && diff!=0 ) {
              console.log("Nie pełny dzień:  połowa diety");
              result = 0.5;
              return result;
            } else if (diff >= 0.333 && diff <= 1) {
              console.log("Nie pełny dzień: pełna dieta");
              result = 1;
              return result;
            } else if (diff > 1) {
              console.log("Przysługuje plena dieta plus dodatki  zagranicznej");
              let newTekst = diff.split(".");
              let test1 = "0." + newTekst[1];
              console.log(test1);
              if (test1 <= 0.333 && test1 != 0) {
                console.log("Mniej niz 8h");
                result = parseInt(newTekst[0]) + 0.5;
              } else if (parseFloat(test1) > 0.333 &&test1 <= 1) {
                console.log(test1);
                console.log("Połowa diety  zagranicznej");
                result = parseInt(newTekst[0]) + 1;
              
                
              }
              else{
                  result = parseInt(newTekst[0]);
              }
              console.log(newTekst);
            }
            else{
              console.log("Czas w delegacji był rowny 0");
              result = 0.0;
              return result;
            }
            break;
          }
  }
  return result;
}
//////// Main function
export function calcDays(
  stateStartDate,
  stateStartTime,
  stateStartDateAbroad,
  stateStartTimeAbroad,
  stateStopDateAbroad,
  stateStopTimeAbroad,
  stateStopDate,
  stateStopTime,
  stateCountryName
) {
    let dateStartPL = stateStartDate;
    let timeStartPL = "T" + stateStartTime;
    let dateStartAbroad = stateStartDateAbroad;
    let timeStartAbroad = "T" + stateStartTimeAbroad;
    let dateStopAbroad = stateStopDateAbroad;
    let timeStopAbroad = "T" + stateStopTimeAbroad;
    let dateStopPL = stateStopDate;
    let timeStopPL = "T" + stateStopTime;
    let countryName = stateCountryName;
    let timeArrayPL=[]
    let timeArrayAbroad=[]
    console.clear();
    console.log("Rozpoczynamy liczenie dla polskiej delegacji:")
    if (countryName === "Polska") {
         //////////////------------------ To jest OKEY-----------------///////////
      console.log(
        "Czas w Polskiej delegacji:",
        calculateTime(dateStartPL, dateStopPL, timeStartPL, timeStopPL,1)
      );
      timeArrayPL.push(calculateTime(dateStartPL, dateStopPL, timeStartPL, timeStopPL,1));
    }
    else{

      console.log("Jedziemy za granice ziom")
      console.log("Policzymy czas jaki byliśmy w polsce przed wyjazdem:")
      console.log(
        "Czas w Polskiej delegacji:",
        calculateTime(dateStartPL, dateStartAbroad, timeStartPL, timeStartAbroad,2)
      );
      //Dodanie pierwszego czasu w polsce
      timeArrayPL.push(calculateTime(dateStartPL, dateStartAbroad, timeStartPL, timeStartAbroad,2));
      console.log(
        "Czas w zagranicznej delegacji:",
        calculateTime(dateStartAbroad, dateStopAbroad, timeStartAbroad, timeStopAbroad,3)
      );
      //Dodanie do tablicy czasu spedzonego poza granica
      timeArrayAbroad.push(calculateTime(dateStartAbroad, dateStopAbroad, timeStartAbroad, timeStopAbroad,3))
        /////
        console.log(
          "Czas w zagranicznej delegacji po powrocie do kraju:",
          calculateTime(dateStopAbroad, dateStopPL, timeStopAbroad, timeStopPL,4)
        );
          //Dodanie drugiego czasu w polsce po powrocie z zagranicy
          timeArrayPL.push(calculateTime(dateStopAbroad, dateStopPL, timeStopAbroad, timeStopPL,4));
    }
    console.warn("Czasy w PL:",timeArrayPL)
    console.warn("Czasy w OUT PL:",timeArrayAbroad)
    const result = [timeArrayPL,timeArrayAbroad];
    return result;
}

function addToTable(value, table) {
  table.push(value);
}
