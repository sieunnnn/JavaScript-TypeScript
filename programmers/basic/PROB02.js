const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

function printResult() {
    let string = "";
    for (let i = 1; i <= input[0]; i ++) {
        for (let j = 1; j <= i; j ++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}

rl.on('line', function (line) {
    input = line.split(' ');

}).on('close', function () {
    printResult();
});