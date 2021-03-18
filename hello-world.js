// soorten data: Primitive DataTypes
// - text : string -> "hello students"
// - getallen: number -> 5, 5.5
// - ja of nee: boolean -> true & false
// - oeps dit bestaat niet: undefined -> undefined
// - dit bestaat (maar dat is ok): null -> null

// Data kan je opslaan in variabelen
// var username = "Rein";
// var birthYear = 1987;

// reken operators
// optellen: +
// aftrekken: -
// vermenigvuldigen: *
// delen: /

// console.log(username);
// console.log("I will turn");
// console.log(2021 - birthYear);
// console.log("This year");

// text transformeren: text operators, methods
// " hallo " + " wereld "
//  .toLowerCase()
//  .toUpperCase()
// console.log(username + " will turn " + (2021 - birthYear) + " this year");
// console.log("Hello World".toLowerCase());

// comparison operators
// meer dan: >
// minder dan: <
// gelijk aan: ===
// niet gelijk aan: !==

// var ouderdan18 = 2021 - birthYear > 18;

// console.log("ouder dan 18? " + ouderdan18);
// console.log("Is deze gebruiker niet Rein? ", username !== "Rein");

var username = "Reinoptland";
var password = "abcd1234";

var isCorrectPassword = password === "programming";
var isCorrectUsername = username === "Reinoptland";

if (isCorrectUsername === true) {
  if (isCorrectPassword === true) {
    console.log("Welkom");
  } else {
    console.log("Toegang geweigerd");
  }
} else {
  console.log("Deze gebruikersnaam bestaat niet, sorry");
}
