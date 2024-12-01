function sum(a,b){
    return a+b;

}
function subtraction(a,b){
    return a-b;
}
function mult(){
    return a*b;
}
function div(a,b){
    return a/b;
}
function doOperation(a,b,op){
    return op(a,b);
}
let result=doOperation(1,2,sum);
console.log(result);