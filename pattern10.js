/*  *
   **
  ***
 ****
*****




 */
let res=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        res+= " "
    }
    for(let j=i;j>=1;j--){
        res+="*"
    }
    res+="\n"
}
console.log(res);
