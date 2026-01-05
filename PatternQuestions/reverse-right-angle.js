function reverseRightAngle(num){
    for(let i=num; i>0; i--){
        let element = "";
        for(let j=1; j<=i; j++){
            element += "*";
        }
        console.log(element);
    }
}
reverseRightAngle(5);