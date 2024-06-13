let userName = "Leshan Pasindu";

console.log(userName.length);
console.log(userName.charAt(0));//character of index 0
console.log(userName.indexOf("a"));//first index of character a
console.log(userName.lastIndexOf("a"));//last index of character a
console.log(userName.trim());//Removes the leading and trailing white space and line terminator characters from a string.

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");//we can change any character to another character

console.log(phoneNumber);