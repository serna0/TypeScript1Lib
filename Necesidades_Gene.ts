function randomIntElem(theArray:number[]):number{
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

let positions: number[] = [103,458,472,458];
let randomPosition: number = randomIntElem(positions);

//let colors: string[] = ['violet','indigo','blue','green'];
//let randomColor: string = randomStrElem(colors);



/*function randomElem<T>(theArray: T){
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

let colors: string[] = ['violet','indigo','blue','green'];
let randomColor: string = randomStrElem(colors);

*/