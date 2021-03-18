var emails = [
  { text: "Hi, alles goed", gelezen: true, sender: "kees@kees.com" },
  { text: "Wil je me terug bellen", gelezen: false, sender: "nina@nina.com" },
  {
    text: "Wanneer kom je weer eens langs?",
    gelezen: true,
    sender: "mama@mama.com",
  },
  {
    text: "Is corona al voorbij?",
    gelezen: true,
    sender: "karel@karel.com",
  },
  {
    text: "Wat gaan we morgen leren?",
    gelezen: true,
    sender: "student@student.com",
  },
];

// console.log("Afzender: " + emails[0].sender + " \n\n" + emails[0].text + "\n");
// console.log("Afzender: " + emails[1].sender + " \n\n" + emails[1].text + "\n");
// console.log("Afzender: " + emails[2].sender + " \n\n" + emails[2].text + "\n");
// console.log("Afzender: " + emails[3].sender + " \n\n" + emails[3].text + "\n");

// Javascript: geef alle emails weer.
// Doe dit: "Afzender: " + emails[0].sender + " \n\n" + emails[0].text + "\n"
// Maar dan voor alle emails
// Oplossing: Een loop (lus)

// start commando: var counter = 0;
// check (moet ik doorgaan):  counter < 5
// eind van instructie commando: counter = counter + 1
// blok: {} <-- hier moeten de instructies in
for (var counter = 0; counter < emails.length; counter = counter + 1) {
  console.log("Counter in de loop", counter);
  console.log(
    "Afzender: " +
      emails[counter].sender +
      " \n\n" +
      emails[counter].text +
      "\n"
  );
  // voer deze instructies een aantal keer uit
}
