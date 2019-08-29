var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hi , I'm " + this.name + "!");
    };
    return Person;
}());
var personA = new Person("Sally");
personA.introduceSelf();
//Modificaciones Privadas y públicas
/*
class Person{
    name: string;
    constructor(theName: string){
        this.name = theName;
    }

    introduceSelf(){
        console.log("Hi , I'm "+this.name+"!");
    }
}


let personA = new Person("Sally");
personA.introduceSelf();
personA.name = "Mindy";
personA.introduceSelf();

*/
