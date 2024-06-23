let obj = {
    firstName : "leshan",
    lastName : "pasindu",
    fullName : function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
let x = obj.fullName();
document.getElementById("text").innerHTML = "<h1>"+x+"</h1>" ;
