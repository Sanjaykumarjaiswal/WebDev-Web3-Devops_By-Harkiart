// function sum(num1,num2){
//     let result=num1+num2;
//     return result;
// }

// function displayResult(data){
//     console.log("result of the sum is: "+result);
// }

// function displayResultPassive(data){
//     console.log("Sum's Result is: "+result);
// }

//you are only allowed to call one function after this
//How will you display result after this

function sum(num1,num2,fnToCall){
    let result=num1+num2;
     fnToCall(result);
}

function displayResult(data){
    console.log("result of the sum is: "+data);
}

function displayResultPassive(data){
    console.log("Sum's Result is: "+data);
}

let ans=sum(1,2,displayResult);