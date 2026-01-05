function rightAngle(num){
    for(let i=0; i<num; i++){
        let element = "";
        for(let j=0; j<=i; j++){
            element += "*";
        }
        console.log(element);
    }
}
rightAngle(4);

// Time complexity : O(num*i)
// space complexity : O(1)