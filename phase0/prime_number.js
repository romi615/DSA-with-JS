let primeNumber = 12;
let isPrime = true;
let i = 2;

if(primeNumber > 1)
{
  while (i < primeNumber) {
    console.log(i);
    if (primeNumber % i === 0) {
      isPrime = false;
    } 
    i++;
  }
}

if(primeNumber === 2) {
    isPrime = true;
}

if (isPrime) {
  console.log(`${primeNumber} is a prime!`);
} else {
  console.log(`${primeNumber} is not  a prime!`);
}
