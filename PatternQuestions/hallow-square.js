function hollowSquare(row, col){
    for (let i = 1; i <= row; i++) {
    let ele = "";
    for (let j = 1; j <= col; j++) {

        if(i===1 || j === 1 || i === row || j === col){
            ele = ele + "*";
        }
        else {
            ele = ele + " ";
        }
    }
    console.log(ele);
  }
}
hollowSquare(4, 5);