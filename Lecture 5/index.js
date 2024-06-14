var idNumber;
var birthDay;
var genderNumber;

const boyCalculation = function(){

}



document.getElementById("submit").onclick = function (){
       idNumber = document.getElementById("inputBox").value;
       
       birthYear = idNumber.slice(0, 4);
       birthYear = Number(birthYear);

       genderNumber = idNumber.slice(4, 7);
       genderNumber = Number(genderNumber);

       

       if(genderNumber<500){
        if (birthYear%4 == 0) {
            var totel = genderNumber;
            var count = 0;
            var i = 0;
            var totelMontheValue = 0;
            const arr1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            while(totel > 0){
                totel = totel - arr1[i];
                i++;
                count++; 
            }
            for (let i = 0; i < count - 1; i++) {
                 totelMontheValue = totelMontheValue + arr1[i];
             
            }
            birthDay = genderNumber - totelMontheValue;
             
            document.getElementById("birthDay").innerHTML = birthYear+"/"+count +"/"+birthDay; 
        }else{
            var totel = genderNumber;
            var count = 0;
            var i = 0;
            var totelMontheValue = 0;
            const arr1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            while(totel > 0){
                totel = totel - arr1[i];
                i++;
                count++; 
            }
            for (let i = 0; i < count - 1; i++) {
                 totelMontheValue = totelMontheValue + arr1[i];
             
            }
            birthDay = genderNumber - totelMontheValue;
             
            document.getElementById("birthDay").innerHTML = birthYear+"/"+count +"/"+birthDay; 
        }
        document.getElementById("gender").innerHTML = "male";
       }else{
        if (birthYear%4 == 0) {
            var totel = genderNumber - 500;
            var count = 0;
            var i = 0;
            var totelMontheValue = 0;
            const arr1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            while(totel > 0){
                totel = totel - arr1[i];
                i++;
                count++; 
            }
            for (let i = 0; i < count - 1; i++) {
                 totelMontheValue = totelMontheValue + arr1[i];
             
            }
            birthDay = genderNumber - 501 - totelMontheValue;
             
            document.getElementById("birthDay").innerHTML = birthYear+"/"+count +"/"+birthDay; 
        }else{
            var totel = genderNumber - 500;
            var count = 0;
            var i = 0;
            var totelMontheValue = 0;
            const arr1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            while(totel > 0){
                totel = totel - arr1[i];
                i++;
                count++; 
            }
            for (let i = 0; i < count - 1; i++) {
                 totelMontheValue = totelMontheValue + arr1[i];
             
            }
            birthDay = genderNumber - 501 - totelMontheValue;
             
            document.getElementById("birthDay").innerHTML =birthYear+"/"+count +"/"+birthDay; 
        }
        document.getElementById("gender").innerHTML = "female";
       };
       
       
};