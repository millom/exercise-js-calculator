console.log("Help");

alert("Välkommen till min räknare!");

run = true;
while (run) {
  // alert("Starta");
  value1 = prompt("Skriv in värde 1");
  value2 = prompt("Skriv in värde 2");
  command = prompt("Skriv önskat räknesätt (+, -, *, /)");

  console.log("Värden", value1, value2, command);

  answer = undefined;
  switch (command) {
    case "+":
      answer = value1 + value2;
      break;
    case "-":
      answer = value1 - value2;
      break;
    case "*":
      answer = value1 * value2;
      break;
    case "/":
      answer = value1 / value2;
      break;
    default:
      answer = `Felaktigt ränkesätt (${command})`;
  }

  console.log("Svar:", `${value1} ${command} ${value2} = ${answer}`);

  input = prompt(
    `Svar: ${value1} ${command} ${value2} = ${answer} \n(Skriv a för att avsluta)`
  );
  // alert(input);
  run = input !== "a" ? true : false;
}

alert("Tack för den här gången.");
