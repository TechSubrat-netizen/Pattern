/* 12345
    1234
     123
      12
       1
 */
let res=""
for(let i=5;i>=1;i--){
    for(let j=5;j>i;j--){
        res+=" "
    }
    for(let j=1;j<=i;j++){
        res+=j
    }
    res+="\n"
}
console.log(res);
