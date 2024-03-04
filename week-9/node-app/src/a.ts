const x: number = 1;
console.log(x);
function add(a: number, b:number):number {
  return (a+b
  )
}
function fn(){
    setTimeout(()=>{
        console.log("hi");
    }, 1000);
}

function waitOne( fn:()=> void ) {
    fn();
}
waitOne();

function isLegal(age: number):boolean{
    return age>18;
}


console.log(isLegal(100));