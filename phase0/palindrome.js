/*let number = 12321;
let reverseNumber = "";
let mrwilson = number;

while(mrwilson !== 0){
    reverseNumber = reverseNumber + mrwilson%10;
    mrwilson = Math.floor(mrwilson/10);
}

console.log(reverseNumber)

if(number === Number(reverseNumber)) {
    console.log(`${number} is a palindrome`);
}else {
    console.log(`${number} is not a palindrome`);
}*/

let wolvarine = "madam"
let l = 0;
let r = wolvarine.length-1;
let bool = false;

while (l < r) {
    if(wolvarine[l++] === wolvarine[r--]){
        bool = true;
    }else {
        bool = false;
    }
}

if(bool){
        console.log(`${wolvarine} is a palindrome`);

} else {
        console.log(`${wolvarine} is not a palindrome`);

}
