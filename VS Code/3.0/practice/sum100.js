

function sumFrom0to100(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
let ans=sumFrom0to100(100);
console.log(ans);