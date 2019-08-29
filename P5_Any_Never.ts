let a:any = "apple";
let b:any = 14;
let c:any = false;

//OBPT
let aa: never;//ok
let bb: never=false; //e
let cc:never=null;//e
let dd:never="monday"; //e

function stuck():never{
    while(true){

    }
}