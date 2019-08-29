class Person {
    private name: string;
    constructor(theName: string){
        this.name = thename;
    }
    introduceSelf(){
        console.log("Hi, i'm "+this.name+"!");
    }
}


class Friend extends Person{
    yearsKnown: number;
    constructor(name: string, yearsKnown: number){
        super(name);
        this.yearsKnown = yearsKnown;
    }
    timeknow(){
        console.log("We have been friend for "+this.yearsKnown+" years.");
    }
}

let friendA = new Friend("Jacob",8);

friendA.introduceSelf();

friendA.timeknow();