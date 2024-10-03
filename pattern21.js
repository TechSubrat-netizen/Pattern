let res=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==5||j==3){
            res+="*"
        }
        else{
            res+=" "
        }
    }
    res+="\n"
}
console.log(res);
