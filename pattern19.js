/* 54321
    5432
     543
      54
       5 */
let res=""
for(let i=1;i<=5;i++){
    for(let j=1;j<i;j++){
        res+=" "
    }
    for(let j=5;j>=i;j--){
        res+=j
    }
    res+="\n"
}
console.log(res);
