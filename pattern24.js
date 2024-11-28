let str=""
for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        str+=" "
    }
    for(let j=i;j>=1;j--){
        str+=j
    }
    for(let j=2;j<=i;j++){
        str+=j
    }
    str+="\n"
}
console.log(str);
