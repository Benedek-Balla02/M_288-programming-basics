/** 
 * Füllt einen Array mit Personen (als Objekte mit Namen und Alter), 
 * dann gebt jeweils nur die Namen aus welche älter als
 * 20 Jahre sind.
 * 
 * Tipps: 
 * 
 * https://www.w3schools.com/js/js_loop_for.asp
 * https://www.w3schools.com/js/js_if_else.asp
 */


const personen = [
    { name: "Janis", alter: 17 },
    { name: "Thierry", alter: 95 },
    { name: "Fabio", alter: 67 },
    { name: "Bafio", alter: 33 },
    { name: "Gianluigi", alter: 19 }
  ];

 
  personen
    .filter(person => person.alter > 20)
    .forEach(person => console.log(person.name));