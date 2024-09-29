/*  5
   45
  345
 2345
12345 */
let res=""
for(let i=5;i>=1;i--){
    for(let j=1;j<=i-1;j++){
        res+=" "
    }
    for(let j=i;j<=5;j++){
        res+=j
    }
    res+="\n"
}
console.log(res);
