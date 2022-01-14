////Methods in creating Objects in JS///////////
/// Creating object with object literals////////
const car1 = {
    name :"TataMotor",
    color :"red",
    model : "suv"
};
//if we want to access any feacture than ////
console.log(car1.name);
console.log(car1.color);

/////Using new keyword + Object keyword/////////

const car2 = new Object();
car2.name = "tata";
car2.model = "altero";
car2.color = "blue";
console.log(car2.name);

// use of this & new keyword to create object 
function Person1(){
    this.name = "megha ";
    this.gender =" f";
}
const personobj3 = new Person1() ;// if d
console.log(personobj3);

//function which also takes arguments 

function Person2(name ,age ){
    this.name = name;
    this.age = age ;

}
const personobj1 = new Person2("megha ", "30") ;
console.log(personobj1);


////////another method with empty function //////
function Person3(){

}
const personobj2 = new Person3() ;
personobj2.name = "megha";
console.log(personobj2);