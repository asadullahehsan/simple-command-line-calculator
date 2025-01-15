import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        message: "Enter the first number: ",
        name: "firstNumber"
    },
    {
        type: "number",
        message: "Enter the second number: ",
        name: "secondNumber"
    },
    {
        type: "list",
        message: "What would you like to do?",
        name: "operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
switch (answer.operation) {
    case "Addition":
        console.log(`Result: ${answer.firstNumber + answer.secondNumber}`);
        break;
    case "Subtraction":
        console.log(`Result: ${answer.firstNumber - answer.secondNumber}`);
        break;
    case "Multiplication":
        console.log(`Result: ${answer.firstNumber * answer.secondNumber}`);
        break;
    case "Division":
        console.log(`Result: ${answer.firstNumber / answer.secondNumber}`);
        break;
    default:
        console.log("Invalid operation");
        break;
}
