let numbers = [1, 3, 5, 2, 6];

numbers.forEach(cube);
numbers.forEach(display);

function double (element, index, array){
    array[index] = element * 2;
}

function cube (element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}