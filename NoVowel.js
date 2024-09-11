let input=prompt("enter input:");
let vows="aeiouAEIOU";
let result="";
for(i of input){
    if(!vows.includes(i)){
        result=result+i;
    }
}
console.log(result);