function square(n){
    return n*n;

}
function cube(n){
   return n*n*n;
}
//Probelm---> DRY = Don't repeat yourself
function sumOfSquares(a,b){
    let value1=square(a);
    let value2=square(b);
    return value1+value2;
}
function sumOfCube(a,b){
    let value1=cube(a);
    let value2=cube(b);
    return value1+value2;
}
let ans=sumOfSquares(2,3);
console.log(ans);
