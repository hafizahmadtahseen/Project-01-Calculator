import inquirer from "inquirer";

const answers: {
  Number1: number;
  Number2: number;
  Operator: string;
} = await inquirer.prompt([
  {
    type: "number",
    name: "Number1",
    message: "Enter the first number",
  },
  {
    type: "list",
    name: "Operator",
    choices: [`+`, `-`, `*`, `/`],
    message: "Select Operator",
  },
  {
    type: "number",
    name: "Number2",
    message: "Enter the second number",
  },
]);

const { Number1, Number2, Operator } = answers;
if (Number1 && Number2 && Operator) {
  if (Operator == "+") {
    addition(Number1, Number2);
  } else if (Operator == "-") {
    subtraction(Number1, Number2);
  } else if (Operator == "*") {
    Multiplication(Number1, Number2);
  } else if (Operator == "/") {
    division(Number1, Number2);
  } else {
    console.log("Kindly Enter Valid Input");
  }
}
function addition(Number1: number, Number2: number) {
  const result = Number1 + Number2;
  console.log(`Sum: ${Number1}+${Number2} = ${result}`);
}
function subtraction(Number1: number, Number2: number) {
  const result = Number1 - Number2;
  console.log(`Subtraction: ${Number1}-${Number2} = ${result}`);
}
function Multiplication(Number1: number, Number2: number) {
  const result = Number1 * Number2;
  console.log(`Multiplication: ${Number1}*${Number2} = ${result}`);
}
function division(Number1: number, Number2: number) {
  const result = Number1 / Number2;
  console.log(`Division: ${Number1}/${Number2} = ${result}`);
}
