function removeChar(theString:string, theChar: string): string{
    let theRegex= new RegExp(theChar, "gi");
    return theString.replace(theRegex,'');
}

function removeIt<t>(theInput: T. theIt: string):T{
    let theRegex = new RegExp(theIt, 'gi');
    return theInput.replace(theRegex,'');
}