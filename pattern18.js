/* 12345
    2345
     345
      45
       5*/
let res =""
for(let i=1;i<=5;i++){
    for(let j=1;j<i;j++){
        res+=" "
    }
    for(let j=i;j<=5;j++){
        res+=j
    }
    res+="\n"
}
console.log(res);
