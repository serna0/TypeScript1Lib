//Tipo de datos Null
let a: null = null; //ok
let b: undefined = null; //Error
let c: number = null; //error
let d: void = null; //error
//False
let a: null = null; //ok
let b: undefined = null;//ok
let c: number=null; //ok
let d: void=null;//ok

//Tipo de datos indefinido
let a: undefined = undefined; //ok
let b: undefined = null; //error
let c: number = undefined; //errror
let d: void = undefined; //ok
//False
let a: undefined = undefined; //ok
let b: undefined = null; //error
let c: number = undefined; //errror
let d: void = undefined; //ok

//Tipos de datos void
let a: void = undefined; //ok
let b: void =  null; //error
let c: void = 3; //error
let d:void = "apple"; //error
//false
let a: void = undefined; //ok
let b: void =  null; //ok
let c: void = 3; //error
let d:void = "apple"; //error


//tipos de datos boolean
let a : boolean = true;
let b: boolean=false;
let c: boolean=23; //error
let d: boolean="blue"; //error

//Tipos de datos numericos
let a: number = undefined; //e
let b:number = null;//e
let c:number =3;
let d:number = 0b111001; //binary
let e:number = 0o436; //octal
let f:number =0xadf0d; //hexa
let g:number = "cat"; //e
//false
let a: number = undefined; //ok
let b:number = null;//ok
let c:number =3;
let d:number = 0b111001; //binary
let e:number = 0o436; //octal
let f:number =0xadf0d; //hexa
let g:number = "cat"; //e



//Tipos de datos string
let a:string = undefined; //error
let b: string = null //error
let c: string = "";
let d: string ="y";
let e: string = "building";
let f: string = 3;//error
let g: string = "3";
//false
let a:string = undefined; //ok
let b: string = null //ok
let c: string = "";
let d: string ="y";
let e: string = "building";
let f: string = 3;//ok
let g: string = "3";
