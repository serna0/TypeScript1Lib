function area(shape, width, height) {
    var area = width * height;
    return "I'm a " + " with an area of " + area + " cm squared.";
}
document.body.innerHTML = area("rectangle", 30, 15);
