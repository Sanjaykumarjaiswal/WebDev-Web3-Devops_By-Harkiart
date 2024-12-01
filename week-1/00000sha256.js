const crypto=require("crypto");
//function to find an input string that produces a hash start

function findHashWithPrefix(prefix){
    let input=0;
    while(true){
        let inputStr=input.toString();
        let hash=crypto.createHash('sha256').update(inputStr).digest('hex');

        if(hash.startsWith(prefix)){
            return{input:inputStr,hash:hash}
        }
        input++;
    }
}

//find and print the input string and hash

const result=findHashWithPrefix('0000000000');
console.log(`input:${result.input}`)
console.log(`hash:${result.hash}`)
