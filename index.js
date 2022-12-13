// setTimeout(() => console.log('timer expired'), 1000)
// function x(y){
//     console.log('index x');
//     y();
// }
// x(function y(){
//     console.log('inside y');
// })

// console.log('qu1 end')
// //que 2

// setTimeout(() => console.log('timer 1'),1000)
// setTimeout(() => console.log('timer 2'),0)
// function x(y){
//     console.log('inside X');
//     y();
// }
// x(function y(){
//     setTimeout(() => console.log('inside y'),0)
// })

//que
function attachedEventListener(){ // make a closure
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("button clicked" ,++count); 
    });
    document.getElementById("clickMe").addEventListener('DOMContentLoaded',function yz(){
        console.log("DOM has loaded"); 
    });
}
attachedEventListener();

//Event listener are heavy that means it takes memory so when ever we attach any event listener it kind of forms of closure even when the call stack is empty we are not executing program ,but still this program is not freeing of this memory it cannot free of the memory because  we never some body click this button so we need this closure to count this in this case we need of extra memory and event listener is heavy , that is good practice of free up . 

//when we remove suppose this function Event listener then all these  variable are held will be garbage collector  .
