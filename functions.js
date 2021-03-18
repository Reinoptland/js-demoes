// functie: je eigen javascript commando!
// - stukken code hergebruiken
// - je functie kan later worden uitgevoerd

// keyword: function
// function name: sayHallo
// parameter list: ()
// block: {}

// functie definitie
// parameter toevoegen
function sayHello(user) {
  console.log("Hallo " + user);
}

// functie "call" het aanroepen van de functie
// argument meegeven
// sayHello("World");
// sayHello("Jeroen");
// sayHello("Melanie");

// setTimeout(sayHello, 2000);

function logIn(userName, password) {
  var correctUserName = "reinoptland";
  var correctPassWord = "abcd1234";

  if (userName === correctUserName) {
    console.log("Dit is Rein");
    if (password === correctPassWord) {
      sayHello(userName);
    } else {
      console.log("Password is verkeerd, sorry");
    }
  } else {
    console.log("Dit is iemand anders");
  }
}

logIn("kees", "qwerty");
logIn("reinoptland", "abcd1234");
