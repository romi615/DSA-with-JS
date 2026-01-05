/*function numberTriangle(num){
    for(let i=1; i<=num; i++){
        let element = "";
        for(let j=1; j<=i; j++){
            element += j;
        }
        console.log(element);
    }
}
numberTriangle(5);
*/

function numberTriangle(num){
    for(let i=1; i<=num; i++){
        let element = "";
        for(let j=1; j<=i; j++){
            element += i;
        }
        console.log(element);
    }
}
numberTriangle(5);