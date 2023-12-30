//using set interval
// let i = 0;
// console.log(i++);
// setInterval(() => {
//   console.log(i++);
// }, 100);

//without using setInterval
let i = 0;
console.log(i++);

counter();

function counter(){
    setTimeout(()=>{
        console.log(i++);
        counter();
    }, 1000);
}