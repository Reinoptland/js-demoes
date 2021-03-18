var bigTitle = document.getElementById("bigTitle"); // element selecteren & opslaan
// console.log(bigTitle); // even checken

bigTitle.textContent = "Geemail"; // we passen de text aan
bigTitle.style.color = "hotpink";

// selecteer alles wat een class paragraph heeft & sla het op
var paragraphs = document.getElementsByClassName("paragraph");
// console.log(paragraphs); // even checken

// pass de text van de derde paragraph aan naar: "bla bla bla"
paragraphs[2].textContent = "bla bla bla";
paragraphs[1].remove();

// var email = { text: "Hallo hoe is het", sender: "kees@kees.com" };
var text = localStorage.getItem("text");
var sender = localStorage.getItem("sender");

// Stap 1
var emailElement = document.createElement("h4");
var emailText = document.createElement("p");

// Stap 2
if (sender === null) {
  emailElement.textContent = "Inbox is leeg";
} else {
  emailElement.textContent = "Afzender: " + sender;
}

emailText.textContent = text;
// console.log(emailElement);

// Stap 3
var inbox = document.getElementById("inbox");

// Stap 4
inbox.appendChild(emailElement);
inbox.appendChild(emailText);

// Verwijder knopje
// Stap 1: Maak knopje (HTML)

// Stap 2: Selecteren
var deleteButton = document.getElementById("deleteButton");
console.log(deleteButton);

// Stap 3: schrijf een functie
function deleteAllEmails() {
  console.log("DELETE EVERYTHING");
  // code om te verwijderen komt hier
  // selecteer de inbox
  // verwijder inbox
  var inbox = document.getElementById("inbox");
  console.log(inbox);
  inbox.remove();
  localStorage.removeItem("text");
  localStorage.removeItem("sender");
}

// Stap 4: luister naar een click, voer een functie als je die hoort
deleteButton.addEventListener("click", deleteAllEmails);
