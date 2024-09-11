function size10(input){
    let output="";
  if(input.length>=10){
       output=input[0]+input.length+input[input.length-1];
       console.log(output);
  }
  else{
       console.log(input);
  }


}
size10("sushanthreddy");
size10("vijay");
size10("vinodchoudhary");