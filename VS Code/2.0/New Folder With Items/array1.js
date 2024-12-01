//print biggest number in an array

let number=[21,777,45,657,89];
// let bigNumber1=0;
let biggestNumber=0;
for(let i=0;i<number.length;i++){
    if(number[i]>biggestNumber){
        biggestNumber=number[i];
    }
}
console.log(biggestNumber);