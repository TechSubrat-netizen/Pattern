//     *
//    ***
//   *****
//  *******
// *********

let str=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        str+=" "
    }
    for(let j=1;j<=2*i-1;j++){
        str+="*"
    }
   
    str+="\n"

}
console.log(str);
