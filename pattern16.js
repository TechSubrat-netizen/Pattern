/* *****
    ****
     ***
      **
       * 
 */
let res=""
for(let i=5;i>=1;i--){
    for(let j=5;j>i;j--){
        res+=" "

    }
    for(let j=i;j>=1;j--){
        res+="*"
    }
    res+="\n"
      
        
}
console.log(res);

