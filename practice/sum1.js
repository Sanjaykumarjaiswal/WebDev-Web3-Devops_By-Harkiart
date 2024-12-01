function square(n){
    return n*n;

}
function cube(n){
   return n*n*n;
}

function sumOfOperation(a,b,op){
    let value1=op(a);
    let value2=op(b);
    return value1+value2;
}

//functional Argument
let ans=sumOfOperation(2,3,cube);
console.log(ans);