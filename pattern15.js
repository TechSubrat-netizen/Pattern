/*54321
   4321
    321
     21
      1 */
let res=""
for(let i=5;i>=1;i--){
    for(let j=5;j>i;j--){
        res+=" "

    }
    for(let j=i;j>=1;j--){
        res+=j
    }
    res+="\n"
      
        
}
console.log(res);
