function square(n){
    return n*n;
    
}

function squareOfNumbers(a,b){
    let val1=square(a);
    let val2=square(b);
    let ans=val1+val2;
    return ans;

}
let result=squareOfNumbers(2,3)
console.log(result);