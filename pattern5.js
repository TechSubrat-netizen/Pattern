// 1
// 12
// 123
// 1234
// 12345
let res=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        res+=j
    }
    res+="\n"
}
console.log(res);
