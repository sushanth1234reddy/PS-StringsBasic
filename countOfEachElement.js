let arr=[1,1,2,3];
let emp=[];
let count=[];
let gg={};
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i);
    }
}
console.log(emp);
for(i of emp){
    let c=0
    for(j of arr){
        if(i==j){
            c++;
        }
    }
    count.push(c);
}
console.log(count);
for(i=0;i<count.length;i++){
    gg[emp[i]]=count[i];
}

console.log(gg);
