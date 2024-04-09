#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "first_number" },
    { message: "Enter Second Number", type: "number", name: "second_number" },
    {
        message: "Select one of the opeators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
//use conditional statement
if (answer.operator === "Addition") {
    console.log(answer.first_number + answer.second_number);
}
if (answer.operator === "Subtraction") {
    console.log(answer.first_number - answer.second_number);
}
if (answer.operator === "Multiplication") {
    console.log(answer.first_number * answer.second_number);
}
if (answer.operator === "Division") {
    console.log(answer.first_number / answer.second_number);
}
else {
    "please select a valid operator";
}
