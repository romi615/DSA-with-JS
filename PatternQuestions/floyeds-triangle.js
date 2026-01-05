function floyedsTriangle(num){
    let count = 1;
    for (let i = 1; i <= num; i++) {
    let ele = "";
    for (let j = 1; j <= i; j++) {
        ele += count++ + " ";
    }
    console.log(ele);
  }
}
floyedsTriangle(4);