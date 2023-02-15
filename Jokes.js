//1
const readLine = require('readline-sync');

let answer = readLine.question("Wanna hear a joke?");
console.log(answer);
if (answer == "yes"){
    console.log("Ok here it is.--> How Does moses make coffee? Hebrews it!")
}
if (answer == "Yes"){
    console.log("Ok here it is.--> How Does moses make coffee? Hebrews it!")
}
if (answer == "YES"){
    console.log("Ok here it is.--> How Does moses make coffee? Hebrews it!")
}
else {
    console.log("Oh alright than...")
}

