function rightAlignedTriangle(num) {
  for (let i = 1; i <= num; i++) {
    let ele = "";
    for (let j = 1; j <= num-i; j++) {
        ele = ele + " ";
    }

    for(let k = 1; k <= i; k++ ){
        ele = ele + "*"
    }
    console.log(ele);
  }
}
rightAlignedTriangle(4);
