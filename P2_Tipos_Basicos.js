//Tipo de datos Null
var a = null; //ok
var b = null; //Error
var c = null; //error
var d = null; //error
//False
var a = null; //ok
var b = null; //ok
var c = null; //ok
var d = null; //ok
//Tipo de datos indefinido
var a = undefined; //ok
var b = null; //error
var c = undefined; //errror
var d = undefined; //ok
//False
var a = undefined; //ok
var b = null; //error
var c = undefined; //errror
var d = undefined; //ok
//Tipos de datos void
var a = undefined; //ok
var b = null; //error
var c = 3; //error
var d = "apple"; //error
//false
var a = undefined; //ok
var b = null; //ok
var c = 3; //error
var d = "apple"; //error
//tipos de datos boolean
var a = true;
var b = false;
var c = 23; //error
var d = "blue"; //error
//Tipos de datos numericos
var a = undefined; //e
var b = null; //e
var c = 3;
var d = 57; //binary
var e = 286; //octal
var f = 0xadf0d; //hexa
var g = "cat"; //e
//false
var a = undefined; //ok
var b = null; //ok
var c = 3;
var d = 57; //binary
var e = 286; //octal
var f = 0xadf0d; //hexa
var g = "cat"; //e
//Tipos de datos string
var a = undefined; //error
var b = null; //error
var c = "";
var d = "y";
var e = "building";
var f = 3; //error
var g = "3";
//false
var a = undefined; //ok
var b = null; //ok
var c = "";
var d = "y";
var e = "building";
var f = 3; //ok
var g = "3";
