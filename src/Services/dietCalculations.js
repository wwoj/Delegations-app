// Calculating values of diet for each day
let time23 = "T23:59:59";
let time0 = "T00:00:00";
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
  // console.log("Data 1", _date1);
  //  console.log("Data 2", _date2);
  let _diffValue = _date2.getTime() - _date1.getTime();
  let diff = (_diffValue / (1000 * 3600 * 24)).toFixed(2);
  // console.warn("Procent dnia spędzony w delegacji: ", diff);
  let result;
  switch (action) {
    case 1:
      if (diff < 0.33) {
        return 0;
      } else if (diff > 0.51) {
        return 1;
      } else {
        return 0.5;
      }
    case 2:
      return Math.round(diff);
      break;
    default:
      return 0;
      break;
  }
  return null;
}
//////// Main function
export function calcDays(
  statestartDate,
  statestartTime,
  statestartDateAbroad,
  statestartTimeAbroad,
  statestopDateAbroad,
  statestopTimeAbroad,
  statestopDate,
  statestopTime,
  countryName
) {
  let dateStartPL = statestartDate;
  let timeStartPL = "T" + statestartTime;
  let dateStartAbroad = statestartDateAbroad;
  let timeStartAbroad = "T" + statestartTimeAbroad;
  let dateStopAbroad = statestopDateAbroad;
  let timeStopAbroad = "T" + statestopTimeAbroad;
  let dateStopPL = statestopDate;
  let timeStopPL = "T" + statestopTime;
  let timeTableInPL=[];
  let timeTableAbroad=[]
//   let currencyRate = this.state.bid;
//   let dietValue = this.state.diet;
//   let timeInPoland = [];
//   let timeAbroad = [];
//   let calcdietPL = 0;
//   let calcdietOut = 0;
  /// sumowanie w 2 tablicach wartosci diet dla PL i poza PL

  // liczymy tylko polską delegacje teraz
  console.clear();
  console.log("Data rozpoczecia delegacji:", dateStartPL);
  console.log("Data rozpoczecia delegacji:", dateStopPL);
  if (countryName === "Polska") {
    if (dateStartPL !== dateStopPL) {
      console.log("Koniec delegacji innego dnia");
      console.log(
        "Czas w dniu delegacji:",
        calculateTime(dateStartPL, dateStartPL, timeStartPL, time23, 1)
      );
      timeTableInPL.push(calculateTime(dateStartPL, dateStartPL, timeStartPL, time23, 1))
      var today = new Date(dateStartPL);
      var nextDayLong = new Date(today.getTime() + 24 * 60 * 60 * 1000);
      var nextDayShort = nextDayLong.toISOString().substr(0, 10);
      console.log("Data 2nd: ", nextDayShort);

      if (dateStopPL === nextDayShort) {
        console.log("Koniec jutro");
        console.log(
          "Czas w sotatnim dniu:",
          calculateTime(nextDayShort, dateStopPL, time0, timeStopPL, 1)
        );
        timeTableInPL.push(calculateTime(nextDayShort, dateStopPL, time0, timeStopPL, 1))
      } else {
        console.log("Koniec wyjazdu w późniejszym terminie");
        console.log(
          "Pomiedzy wyjazdem a wiazdem::",
          calculateTime(nextDayShort, dateStopPL, time0, time0, 2)
        );
        timeTableInPL.push(calculateTime(nextDayShort, dateStopPL, time0, time0, 2))
        console.log(
          "Czas w ostatnim dniu delegacji:",
          calculateTime(dateStopPL, dateStopPL, time0, timeStopPL, 1)
        );
        timeTableInPL.push(calculateTime(dateStopPL, dateStopPL, time0, timeStopPL, 1))
      }
    } else {
      console.log("Koniec delegacji tego samego dnai co start");
      console.log(
        "Czas delegacji:",
        calculateTime(dateStartPL, dateStopPL, timeStartPL, timeStopPL, 1)
      );
      timeTableInPL.push( calculateTime(dateStartPL, dateStopPL, timeStartPL, timeStopPL, 1))
    }
    console.warn("Tablica czasu w polsce:,",timeTableInPL)
  }
  //Jedziemy za granicę :D
  else {
    console.log("Wyjezdzamy z polski");

    //wyjazd za granice teo samego dnia co zaczynamy
    if (dateStartPL === dateStartAbroad) {
      console.log("Wyjazd w tym samym dniu");
      console.log(
        "Czas delegacji w PL:",
        calculateTime(
          dateStartPL,
          dateStartAbroad,
          timeStartPL,
          timeStartAbroad,
          1
        )
      );
      timeTableInPL.push(calculateTime(
        dateStartPL,
        dateStartAbroad,
        timeStartPL,
        timeStartAbroad,
        1
      ));
    } else {
      console.log("Wyjazd w tym innym dniu");
      console.log(
        "Czas delegacji w w pierwszym dniu w PL:",
        calculateTime(dateStartPL, dateStartPL, timeStartPL, time23, 1)
      );
      timeTableInPL.push(calculateTime(dateStartPL, dateStartPL, timeStartPL, time23, 1));

      // Sprawdzam czy wyjazd nastąpił kolejnego dnia
      var today = new Date(dateStartPL);
      var nextDayLong = new Date(today.getTime() + 24 * 60 * 60 * 1000);
      var nextDayShort = nextDayLong.toISOString().substr(0, 10);
      console.log("Data 2nd: ", nextDayShort);
      if (nextDayShort === dateStartAbroad) {
        console.log(
          "Czas w drugim dniu przed wylotem:",
          calculateTime(
            nextDayShort,
            dateStartAbroad,
            time0,
            timeStartAbroad,
            1
          )
        );
        timeTableInPL.push(calculateTime(
            nextDayShort,
            dateStartAbroad,
            time0,
            timeStartAbroad,
            1
          ));
      } else {
        console.log("Wylot za granicę w późniejszym terminie");
        console.log(
          "Czas pomiedzy dniami do wylotu:",
          calculateTime(nextDayShort, dateStartAbroad, time0, time0, 2)
        );
        timeTableInPL.push(calculateTime(nextDayShort, dateStartAbroad, time0, time0, 2));
        console.log(
          "Czas w ostatnim dniu przed wylotem:",
          calculateTime(
            dateStartAbroad,
            dateStartAbroad,
            time0,
            timeStartAbroad,
            1
          )
        );
        timeTableInPL.push( calculateTime(
            dateStartAbroad,
            dateStartAbroad,
            time0,
            timeStartAbroad,
            1
          ));
      }
    }
console.warn("Czas spędzony w PL:",timeTableInPL)
    // Woow policzyliśmy dni ile spedziliśmy na delegacji od poczatku do wyjazdu za granice :D
    // Liczymy teraz czas jaki spędzimy za granicą!!

    if (dateStartAbroad !== dateStopAbroad) {
      console.warn("Powrót z zagranicy innego dnia");
      // Sprawdzam czy powrot nastąpił kolejnego dnia
      var today = new Date(dateStartAbroad);
      var nextDayLong = new Date(today.getTime() + 24 * 60 * 60 * 1000);
      var nextDayShort = nextDayLong.toISOString().substr(0, 10);
      console.log(
        "Czas Jaki spedził za granicą pierwszego dnia: ",
        calculateTime(dateStartAbroad, nextDayShort, timeStartAbroad, time0, 1)
      );
      timeTableAbroad.push( calculateTime(dateStartAbroad, nextDayShort, timeStartAbroad, time0, 1));
      console.log("Data  druga powrotund: ", nextDayShort);

      if (nextDayShort === dateStopAbroad) {
        console.log(
          "Czas Jaki spedził za granicą drugiego dnia: ",
          calculateTime(nextDayShort, dateStopAbroad, time0, timeStopAbroad, 1)
        );
        timeTableAbroad.push(calculateTime(nextDayShort, dateStopAbroad, time0, timeStopAbroad, 1))
      } else {
        console.warn("Czas spedzony za granica dluzszy niz 24h");
        console.error(
          "Pomiedzy drugi - do ostatniego dnia czas",
          calculateTime(nextDayShort, dateStopAbroad, time0, time0, 2)
        );
        timeTableAbroad.push(calculateTime(nextDayShort, dateStopAbroad, time0, time0, 2));
        console.error(
          "Czas w ostatnim dniu delegacji za granica:",
          calculateTime(
            dateStopAbroad,
            dateStopAbroad,
            time0,
            timeStopAbroad,
            1
          )
        );
        timeTableAbroad.push( calculateTime(
            dateStopAbroad,
            dateStopAbroad,
            time0,
            timeStopAbroad,
            1
          ));
      }
    } else {
      console.warn("Powrót z zagranicy tego samego dnia");
      console.log(
        "Czas pobytu za granicą:",
        calculateTime(
          dateStartAbroad,
          dateStopAbroad,
          timeStartAbroad,
          timeStopAbroad,
          1
        )
      );
      timeTableAbroad.push(calculateTime(
        dateStartAbroad,
        dateStopAbroad,
        timeStartAbroad,
        timeStopAbroad,
        1
      ));
    }
    // sprawdzamy jaki czas po przyjezdzie z zagranicy spedził w Polsce na delegacji:
    if (dateStopAbroad !== dateStopPL) {
      // spradzamy czy zkonczenie delegacji nastąpiło w nastepny dzien od powrotu
      console.log("Zakonczenie delegacji w inny dzien");
      var today = new Date(dateStopAbroad);
      var nextDayLong = new Date(today.getTime() + 24 * 60 * 60 * 1000);
      var nextDayShort = nextDayLong.toISOString().substr(0, 10);
      console.log("Data  druga powrotund: ", nextDayShort);
      if (nextDayShort === dateStopPL) {
        console.warn("Zakonczenie delegacji w kolejnym dniu:");
        console.log(
          "Czas jaki spedził w dniu powrotu z zaranicy",
          calculateTime(
            dateStopAbroad,
            dateStopAbroad,
            timeStopAbroad,
            time23,
            1
          )
        
        );
        timeTableInPL.push(calculateTime(
            dateStopAbroad,
            dateStopAbroad,
            timeStopAbroad,
            time23,
            1
          ));
        console.log(
          "Czas do końca delegacji ostatni dzień",
          calculateTime(nextDayShort, dateStopPL, time0, timeStopPL, 1)
          );
          timeTableInPL.push(calculateTime(nextDayShort, dateStopPL, time0, timeStopPL, 1));
      } else {
        console.warn("Zakonczenie kila dni po powrocie z zagranicy");
        console.error(
          "Czas jaki spedził w dniu powrotu z zaranicy",
          calculateTime(
            dateStopAbroad,
            dateStopAbroad,
            timeStopAbroad,
            time23,
            1
          )
        );
        timeTableInPL.push(calculateTime(
            dateStopAbroad,
            dateStopAbroad,
            timeStopAbroad,
            time23,
            1
          ));

        console.error(
          "Czas w dniach pomiedzy powrotem a dniem koncowym",
          calculateTime(nextDayShort, dateStopPL, time0, time0, 2)
          );
              timeTableInPL.push(calculateTime(nextDayShort, dateStopPL, time0, time0, 2))
        console.error(
          "Czas do końca delegacji ostatni dzień",
          calculateTime(dateStopPL, dateStopPL, time0, timeStopPL, 1)
        );
        timeTableInPL.push(calculateTime(dateStopPL, dateStopPL, time0, timeStopPL, 1))
      }
    } else {
      console.warn(
        "Czas jaki praocnwik spedzil w kraju po powrocie z zagranicy"
      );
      console.log(
        "Czas w kraju po powrocie z zagranicy:",
        calculateTime(dateStopAbroad, dateStopPL, timeStopAbroad, timeStopPL, 1)
      );
      timeTableInPL.push(calculateTime(dateStopAbroad, dateStopPL, timeStopAbroad, timeStopPL, 1));
    }
    //wyjazd za granice w pozniejszym terminie
    //koniec delegacji w tym samym dniu co przyjezdzamy
    //koniec delegacji w pozniejszym terminie
  }
  console.error("Suma czasu w polsce: ",timeTableInPL)
  console.error("Suma czasu poza polska: ",timeTableAbroad)
  const timeArrays=[timeTableInPL,timeTableAbroad];
  return timeArrays;
}

function addToTable(value,table)
{
table.push(value);
}