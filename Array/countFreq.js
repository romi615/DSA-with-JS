/*function countFreq(arr){
    arr.sort((a, b)=> a-b);
    let result = []
    let n=arr.length;
    let count=1;
    for(let i=0; i<n; i++){
        if(arr[i]===arr[i+1]){
            count++;
        }
        else {
            result.push(count);
            count = 1;
        }
    }
    return result;
}
console.log(countFreq([10, 20, 10, 5, 20]))*/


/*function countFreq(arr){
    let n=arr.length;
    let result=[];
    for(let i=0; i<n; i++){
        let count = 1;
        for(let j=i+1; j<n; j++){
            if(arr[i]===arr[j]){
                count++;
                
            }
        }
        result.push(count);
    }
    return result;
}
console.log(countFreq([1,2,2,3,1,4]))*/

/*function countFreq(arr) {
    let freq = {}
    for(num of arr){
        freq[num] = (freq[num]||0)+1
    }
    let values = Object.values(freq);
    return values;
}
console.log(countFreq([1,2,2,3,1,4]))*/