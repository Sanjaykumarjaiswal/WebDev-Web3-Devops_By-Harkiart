function arrayToHex(byteArray){
    let hexString='';
    for(let i=0;i<byteArray.length;i++){
        hexString+=byteArray[i].toString(16).padStart(2,'0');
        //toString(16)---> hexadecimal me convert kar deta hai
        //ex: let z=214;
       //         z.toString(16)
       //output:  'd6'
       /*
          let say when i=0;
          byteArray[0]----> 72
          so  72.toString(16)-----> 48


          padStart(2,'0')----> har ek byte do character me convert ho jaye
          h------> 0000 1011
                    0    c
                    dono ko dikhaye
                    we want to pad it with zero if there is only single chaaracter present.
                    "1".padStart(2,"0")----> '01'
                    "1".padStart(5,"0")-----> '00001'
                    agar 2,ya 5 jo bhi ask ho utne digits nahi hain to 0 ya phir jo bhi ask ho uske saath pad karte hain
                    
            
       */
    }
    return hexString;
}

//Example Usage:
const byteArray=new Uint8Array([72,101,108,108,111]);//corresponds to array

const hexString=arrayToHex(byteArray);
console.log(hexString);