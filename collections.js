// Datatypen: Primitive Datatypes
// - string
// - number
// - boolean
// - undefined
// - null

// Datatype: Collections
// - object: keys en values
// - keys: userName, password, age, isProgrammer
// - values: "Rein", "abcd1234", 33, true

// - array: lijst met een volgorder
// - eerste, tweede, derde element
// var user = "Rein"

var user = {
  userName: "Rein",
  passWord: "abcd1234",
  age: 33,
  isProgrammer: true,
};

// console.log(user.userName + " is " + user.age + " years old");

// Verzameling met een volgorde: Array
var todoList = [
  "functies uitleggen",
  "collecties uitleggen",
  "loops uitleggen",
];

console.log(todoList[0], todoList[1]);

// Array of Objects
var ultimateTodoList = [
  { task: "functies uitleggen", done: true },
  { task: "collecties uitleggen", done: true },
  { task: "loops uitleggen", done: false },
];

var soccerTeam = {
  name: "Ajax",
  players: ["Onana", "Timber"],
};
