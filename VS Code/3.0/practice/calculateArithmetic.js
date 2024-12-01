function calculateArithmetic(num1,num2,op){
    let result=op(num1,num2);
    return result;
    
}
function sum(num1,num2){
    return num1+num2;
}

function multi(num1,num2){
    return num1*num2;
}

let ans=calculateArithmetic(1,2,multi);
console.log(ans);