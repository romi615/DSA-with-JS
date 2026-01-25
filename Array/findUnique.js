function findUnique(nums){
    let len=nums.length;
    let ans=0;
    for(let i=0; i<len; i++){
        ans=ans^nums[i];
    }
    return ans;

}
console.log(findUnique([2, 3, 1, 6, 3, 6, 2]))