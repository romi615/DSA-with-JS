function findDuplicate(arr){
    let length = arr.length;
    let ans=0
    for(let i=0; i<length; i++){
        ans=ans^arr[i] 
    }

    for(let i=1; i<length; i++){
        ans=ans^i;
    }
    return ans;
}
console.log(findDuplicate([8, 7, 2, 5, 4, 7, 1, 3, 6]))