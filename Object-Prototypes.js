function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.nationality = "English"; 
// using object constructor
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// All JavaScript objects inherit properties and methods from a prototype. Also we cannot add properties to existing object constructor, like below.
 /* --- Person.nationality = "English"; --- */ // This is not possible. This will give a compilation error

 // But you can do this with this way. 
Person.prototype.nationality = "English";