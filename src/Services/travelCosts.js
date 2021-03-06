var allCountries = [
  { country: "Polska", code: "pl", currency: "pl", value: 30, accom: 300 },
  { country: "Afganistan", code: "af", currency: "eur", value: 47, accom: 140 },
  { country: "Albania", code: "al", currency: "eur", value: 41, accom: 120 },
  { country: "Algieria", code: "dz", currency: "eur", value: 50, accom: 200 },
  { country: "Andora", code: "ad", currency: "eur", value: 50, accom: 160 },
  { country: "Angola", code: "ao", currency: "usd", value: 61, accom: 180 },
  {
    country: "Arabia Saudyjska",
    code: "sa",
    currency: "eur",
    value: 45,
    accom: 180,
  },
  { country: "Argentyna", code: "ar", currency: "usd", value: 50, accom: 150 },
  { country: "Armenia", code: "am", currency: "eur", value: 42, accom: 145 },
  { country: "Australia", code: "au", currency: "aud", value: 88, accom: 250 },
  { country: "Austria", code: "at", currency: "eur", value: 52, accom: 130 },
  {
    country: "Azerbejdżan",
    code: "az",
    currency: "eur",
    value: 43,
    accom: 150,
  },
  { country: "Bangladesz", code: "bd", currency: "usd", value: 50, accom: 120 },
  { country: "Belgia", code: "be", currency: "eur", value: 48, accom: 160 },
  { country: "Białoruś", code: "by", currency: "eur", value: 42, accom: 130 },
  {
    country: "Bośnia i Hercegowina",
    code: "ba",
    currency: "eur",
    value: 41,
    accom: 100,
  },
  { country: "Brazylia", code: "br", currency: "eur", value: 43, accom: 120 },
  { country: "Bułgaria", code: "bg", currency: "eur", value: 40, accom: 120 },
  { country: "Chile", code: "cl", currency: "usd", value: 60, accom: 120 },
  { country: "Chiny", code: "ch", currency: "eur", value: 55, accom: 170 },
  { country: "Chorwacja", code: "hr", currency: "eur", value: 42, accom: 125 },
  { country: "Cypr", code: "cy", currency: "eur", value: 43, accom: 160 },
  { country: "Czarnogóra", code: "me", currency: "eur", value: 40, accom: 140 },
  { country: "Czechy", code: "cz", currency: "eur", value: 41, accom: 1300 },
  { country: "Dania", code: "dk", currency: "dkk", value: 406, accom: 150 },
  { country: "Egipt", code: "eq", currency: "usd", value: 55, accom: 150 },
  { country: "Ekwador", code: "ec", currency: "usd", value: 44, accom: 110 },
  { country: "Estonia", code: "ee", currency: "eur", value: 41, accom: 100 },
  { country: "Etiopia", code: "et", currency: "usd", value: 55, accom: 300 },
  { country: "Finlandia", code: "fl", currency: "eur", value: 48, accom: 160 },
  { country: "Francja", code: "fr", currency: "eur", value: 50, accom: 180 },
  { country: "Grecja", code: "gr", currency: "eur", value: 48, accom: 140 },
  { country: "Gruzja", code: "ge", currency: "eur", value: 43, accom: 140 },
  { country: "Hiszpania", code: "es", currency: "eur", value: 50, accom: 160 },
  { country: "Indie", code: "in", currency: "eur", value: 38, accom: 190 },
  { country: "Indonezja", code: "id", currency: "eur", value: 41, accom: 110 },
  { country: "Irak", code: "iq", currency: "usd", value: 60, accom: 120 },
  { country: "Iran", code: "ir", currency: "eur", value: 41, accom: 95 },
  { country: "Irlandia", code: "ie", currency: "eur", value: 42, accom: 160 },
  { country: "Islandia", code: "is", currency: "eur", value: 56, accom: 160 },
  { country: "Izrael", code: "il", currency: "eur", value: 50, accom: 150 },
  {
    country: "Japonia",
    code: "jp",
    currency: "jpy",
    value: 7532,
    accom: 22000,
  },
  { country: "Jemen", code: "ye", currency: "usd", value: 48, accom: 160 },
  { country: "Jordania", code: "jo", currency: "eur", value: 40, accom: 95 },
  { country: "Kambodża", code: "kh", currency: "usd", value: 45, accom: 100 },
  { country: "Kanada", code: "ca", currency: "cad", value: 71, accom: 190 },
  { country: "Katar", code: "qa", currency: "eur", value: 41, accom: 200 },
  { country: "Kazachstan", code: "kz", currency: "eur", value: 41, accom: 140 },
  { country: "Kenia", code: "ke", currency: "eur", value: 41, accom: 150 },
  { country: "Kirgistan", code: "kg", currency: "usd", value: 41, accom: 150 },
  { country: "Kolumbia", code: "co", currency: "usd", value: 49, accom: 120 },
  { country: "Kongo", code: "cg", currency: "usd", value: 66, accom: 220 },
  {
    country: "Korea Południowa",
    code: "cd",
    currency: "eur",
    value: 46,
    accom: 170,
  },
  {
    country: "Koreańska Republika Ludowo-Demokratyczna",
    code: "kp",
    currency: "eur",
    value: 48,
    accom: 170,
  },
  { country: "Kostaryka", code: "cr", currency: "usd", value: 50, accom: 140 },
  { country: "Kuba", code: "cu", currency: "eur", value: 42, accom: 110 },
  { country: "Kuwejt", code: "kw", currency: "eur", value: 39, accom: 200 },
  { country: "Laos", code: "la", currency: "usd", value: 54, accom: 100 },
  { country: "Liban", code: "lb", currency: "usd", value: 57, accom: 150 },
  { country: "Libia", code: "ly", currency: "eur", value: 52, accom: 100 },
  {
    country: "Lichtenstein",
    code: "li",
    currency: "eur",
    value: 88,
    accom: 200,
  },
  { country: "Litwa", code: "lt", currency: "eur", value: 39, accom: 130 },
  { country: "Luksemburg", code: "lu", currency: "eur", value: 48, accom: 160 },
  { country: "Łotwa", code: "lv", currency: "eur", value: 57, accom: 132 },
  { country: "Macedonia", code: "mk", currency: "eur", value: 39, accom: 125 },
  { country: "Malezja", code: "my", currency: "eur", value: 41, accom: 140 },
  { country: "Malta", code: "mt", currency: "eur", value: 43, accom: 180 },
  { country: "Maroko", code: "ma", currency: "eur", value: 41, accom: 130 },
  { country: "Meksyk", code: "mx", currency: "usd", value: 53, accom: 140 },
  { country: "Mołdawia", code: "md", currency: "eur", value: 41, accom: 85 },
  { country: "Monako", code: "fr1", currency: "eur", value: 50, accom: 180 },
  { country: "Mongolia", code: "mn", currency: "eur", value: 45, accom: 140 },
  { country: "Niderlandy", code: "nl", currency: "eur", value: 50, accom: 130 },
  { country: "Niemcy", code: "de", currency: "eur", value: 49, accom: 150 },
  { country: "Nigeria", code: "bg", currency: "eur", value: 46, accom: 240 },
  {
    country: "Norwegia",
    code: "no",
    currency: "nok",
    value: 451,
    accom: 15000,
  },
  {
    country: "Nowa Zelandia",
    code: "nz",
    currency: "usd",
    value: 58,
    accom: 180,
  },
  { country: "Oman", code: "om", currency: "eur", value: 40, accom: 240 },
  { country: "Pakistan", code: "pk", currency: "eur", value: 38, accom: 200 },
  { country: "Panama", code: "pa", currency: "usd", value: 52, accom: 140 },
  { country: "Peru", code: "pe", currency: "usd", value: 50, accom: 150 },
  { country: "Portugalia", code: "pt", currency: "eur", value: 49, accom: 120 },

  { country: "RPA", code: "za", currency: "usd", value: 52, accom: 275 },
  { country: "Rosja", code: "ru", currency: "eur", value: 48, accom: 200 },
  { country: "Rumunia", code: "ro", currency: "eur", value: 38, accom: 100 },
  { country: "San Marino", code: "sm", currency: "eur", value: 48, accom: 174 },
  { country: "Senegal", code: "sn", currency: "eur", value: 44, accom: 120 },
  { country: "Serbia", code: "xs", currency: "eur", value: 40, accom: 100 },
  { country: "Singapur", code: "sg", currency: "usd", value: 56, accom: 230 },
  { country: "Słowacja", code: "sk", currency: "eur", value: 43, accom: 120 },
  { country: "Słowenia", code: "sl", currency: "eur", value: 41, accom: 130 },
  { country: "USA", code: "us", currency: "usd", value: 59, accom: 300 },
  { country: "Syria", code: "sy", currency: "usd", value: 50, accom: 150 },
  { country: "Szwajcaria", code: "ch", currency: "chf", value: 88, accom: 200 },
  { country: "Szwecja", code: "se", currency: "sek", value: 459, accom: 1800 },
  { country: "Tajlandia", code: "th", currency: "usd", value: 42, accom: 110 },
  { country: "Tanzania", code: "tz", currency: "usd", value: 53, accom: 150 },
  { country: "Tunezja", code: "tn", currency: "eur", value: 37, accom: 100 },
  { country: "Turcja", code: "tr", currency: "usd", value: 53, accom: 173 },
  { country: "Ukraina", code: "ua", currency: "eur", value: 41, accom: 180 },
  { country: "Urugwaj", code: "uy", currency: "usd", value: 50, accom: 80 },
  { country: "Wenezuela", code: "ve", currency: "usd", value: 60, accom: 220 },
  { country: "Węgry", code: "hu", currency: "eur", value: 44, accom: 130 },
  {
    country: "Wielka Brytania",
    code: "uk",
    currency: "gbp",
    value: 35,
    accom: 200,
  },
  { country: "Wietnam", code: "vn", currency: "usd", value: 53, accom: 160 },
  { country: "Włochy", code: "it", currency: "eur", value: 48, accom: 174 },
  {
    country: "Wybrzeże Kości Słoniowej",
    code: "cl",
    currency: "eur",
    value: 33,
    accom: 100,
  },
  { country: "Zimbabwe", code: "zw", currency: "eur", value: 39, accom: 90 },
  {
    country: "Zjednoczone Emiraty Arabskie",
    code: "ar",
    currency: "eur",
    value: 39,
    accom: 200,
  },
  {
    country: "Państwa inne niż wymienione",
    code: "inne",
    currency: "eur",
    value: 41,
    accom: 140,
  },
];

export function getAllCountries() {
  const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      //console.log(allCountries)
      resolve(allCountries);
    }, 100);
  });

  return promise;
}
