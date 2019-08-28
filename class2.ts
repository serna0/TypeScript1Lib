class Shape3D extends Shape{
    
    volumen: number;

    constructor(public name: string, width: number, height: number, lenght: number){
        super(name, width, height);
        this.volumen = length * this.area
    };

    shoutout(){
        return "I´m "+this.name+" with a volumen of "+this.volumen+" cm cube.";
    }

    superShout(){return super.shoutout()}

}

var cube = new Shape3D("cube",30,30,30);
console.log( cube.shoutout());
console.log( cube.superShout());  