/*hello(leave);

function hello(callback){
    console.log("hello");
    callback();
}

function wait() {
    console.log("Wait");
}

function leave() {
    console.log("Leave");
}

function goodBye(){
    console.log("Good Bye");
}*/

  
sum(displaySum, 4, 5);


function sum(callback, x, y){
    let result = x+y;
    callback(result);
}

function displaySum(result){
    console.log(result);
}

