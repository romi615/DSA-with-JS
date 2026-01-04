let fibNumber = 5;
let a=0;
let b=1;
let c;
let fibSeries = ""
for(let i=1; i<=fibNumber; i++){
    c = a+b;
    fibSeries += c + " ";
    a = b;
    b = c;
}

console.log(fibSeries);