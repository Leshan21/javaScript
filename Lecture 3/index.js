let x =Math.floor(Math.random() * 6) + 1;//give us to inside 1 to 6 numbers 
let y =Math.floor(Math.random() * 6) + 1;
let z =Math.floor(Math.random() * 6) + 1;

/*console.log(x);
console.log(y);
console.log(z);*/

document.getElementById("roll").onclick = function(){
    x =Math.floor(Math.random() * 6) + 1; 
    y =Math.floor(Math.random() * 6) + 1;
    z =Math.floor(Math.random() * 6) + 1;

    document.getElementById('xLabel').innerHTML = x;
    document.getElementById('yLabel').innerHTML = y;
    document.getElementById('zLabel').innerHTML = z;
};