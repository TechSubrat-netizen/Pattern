// 1       2       3       4       5
// 6       7       8       9       10
// 11      12      13      14      15
// 16      17      18      19      20
// 21      22      23      24      25

let str=""
let k=1;
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        str+=k++ +"\t"
    }
    str+="\n"
}
console.log(str);
