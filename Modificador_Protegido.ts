class Person {
    private name: string;
    protected age: number;
    protected constructor( theName: string, theAge: number){
        this.name = theName;
        this.age = theAge;
    }
    introduceSelf(){
        console.log("Hi, I am"+this.name+"!");
    }
}

class Friend extends Person{
    yearsKnown: number;
    constructor (name:string, age:number, yearsKnown:number){
        super(name,age);
        this.yearsKnown = yearsKnown;
    }
    thimeKnow(){
        console.log("asdasdasda"+this.yearsKnown+"years");
    }
    friendSience(){
        let firstAge = this.age - this.yearsKnown;
        console.log(`asdasdad ${firstAge}`)
    }
}

let FriendA = new Friend("William",19,8);

FriendA.friendSience();