import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let title = chalkAnimation.neon('...Lets Start Calculations...');
    await sleep();
    title.stop();
}
await welcome();
async function simpleCal() {
    await inquirer.prompt([
        {
            name: "ops",
            message: "What Operation you want to perform?",
            type: "list",
            choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION", "PERCENTAGE", "MODULUS", "EXPONENT"]
        },
        {
            name: "num1",
            message: "Enter Number1:",
            type: "number",
        },
        {
            name: "num2",
            message: "Enter Number2:",
            type: "number",
        },
    ])
        .then(function (answer) {
        if (answer.ops == "ADDITION") {
            console.log(`  Result=${answer.num1} + ${answer.num2} =`, answer.num1 + answer.num2);
        }
        else if (answer.ops == "SUBTRACTION") {
            console.log(`  Result=${answer.num1} - ${answer.num2} =`, answer.num1 - answer.num2);
        }
        else if (answer.ops == "MULTIPLICATION") {
            console.log(`  Result=${answer.num1} * ${answer.num2} =`, answer.num1 * answer.num2);
        }
        else if (answer.ops == "DIVISION") {
            console.log(`  Result=${answer.num1} / ${answer.num2} =`, answer.num1 / answer.num2);
        }
        else if (answer.ops == "PERCENTAGE") {
            console.log(`  Result=${answer.num1} (%) ${answer.num2} =`, answer.num1 * answer.num2);
        }
        else if (answer.ops == "MODULUS") {
            console.log(`  Result=${answer.num1} (Modulus) ${answer.num2} =`, answer.num1 % answer.num2);
        }
        else if (answer.ops == "EXPONENT") {
            console.log(`  Result=${answer.num1} (Exponent) ${answer.num2} =`, answer.num1 ** answer.num2);
        }
    });
    var again = await inquirer.prompt([{
            type: "input",
            name: "restart",
            message: "Do you want to continue? (Y/N):",
        }]);
    if (again.restart == "Y" || again.restart == "y" || again.restart == "YES" || again.restart == "yes") {
        simpleCal();
    }
}
simpleCal();
