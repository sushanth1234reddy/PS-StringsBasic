let input=prompt("Enter String:");
let res="";
for(let i=input.length-1;i>=0;i--){
    res=res+input[i];
}
let out=(input==res)?"Palindrome":"Not Palindrome";
console.log(out);