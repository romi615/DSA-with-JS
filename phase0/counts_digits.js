let number = 123456789;
let countDigit = 0;

while(number !== 0){
   countDigit++;

   number = Math.floor(number/10)
}

console.log(countDigit)