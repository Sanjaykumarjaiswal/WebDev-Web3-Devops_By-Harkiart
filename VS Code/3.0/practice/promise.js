// const rect1={
//     width:2,
//     height:3,
// }

// function area(rect){
//     return rect.width*rect.height;
// }

// const ans=area(rect1);
// console.log(ans);





class Rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
     }

      area(){
     return this.width*this.height;
 
     }

     paint(){
        console.log(`color of rectangle is ${this.color}`)

     }
}
const rect = new Rectangle(2,3,"red");
const area1=rect.area();
