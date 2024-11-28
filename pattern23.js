//     1
//    121
//   12321
//  1234321

let str=""
for(let i=1;i<5;i++){
    for(let j=1;j<=5-i;j++){
        str+=" "
    }
    for(let j=1;j<=i;j++){
        str+=j
    }
    for(let j=i-1;j>=1;j--){
        str+=j
    }
    str+="\n"
}
console.log(str);
