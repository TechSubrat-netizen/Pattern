/*  5
   54
  543
 5432
54321*/
let res=""
for(let i=5;i>=1;i--){
    for(let j=1;j<=i-1;j++){
        res+=" "
    }
    for(let j=5;j>=i;j--){
        res+=j
    }
    res+="\n"
}
console.log(res);