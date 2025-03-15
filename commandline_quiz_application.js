// Import the readline-sync module
const readlineSync = require('readline-sync');

// Prompt the user for their name and greet them
const userName = readlineSync.question("What is your name? ");
console.log(`Hello, ${userName}!`);

// Ask if the user is ready for the test
const answer1 = readlineSync.question("Are you ready for the test? (Type Y for yes or N for no): ");

// Check the user's response and proceed accordingly
if (answer1 === "Y" || answer1 === "y") {
    console.log("Let's start!");
    // Ask 5 questions and collect user responses
   const answer2 = readlineSync.question("What is the result of '5' + 3? ");
   const answer3 = readlineSync.question("What keyword is used to declare a constant variable? ");
   const answer4 = readlineSync.question("What operator is used to check equality in JavaScript (== or ===)? ");
   const answer5 = readlineSync.question("What is the boolean value of `0` in JavaScript? ");
   const answer6 = readlineSync.question("What is 10 multiplied by your number? ");

   console.log("\n🔹 Here are your answers:");
   console.log(`1. Result is -> ${answer2}`);
   console.log(`2️. Keyword used to declare constant variable -> ${answer3}`);
   console.log(`3️. operator is used to check equality in JavaScript -> ${answer4}`);
   console.log(`4️. Boolean value of 0 -> ${answer5}`);
   console.log(`5️. Your number multiplied by 10 -> ${answer6 * 10}`);
   console.log("\n🎉 Thanks for playing, " + userName + "! Hope you enjoyed the quiz.");

} else {
    console.log(`Bye, ${userName}!`);
}
