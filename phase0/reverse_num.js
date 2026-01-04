let number = 123;
let reverseNumber = "";
while (number !== 0) {
    reverseNumber = reverseNumber + number % 10;
    number = Math.floor(number/10);
}

console.log( Number(reverseNumber));