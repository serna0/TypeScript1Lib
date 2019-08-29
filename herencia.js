var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = thename;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hi, i'm " + this.name + "!");
    };
    return Person;
}());
var Friend = /** @class */ (function (_super) {
    __extends(Friend, _super);
    function Friend(name, yearsKnown) {
        var _this = _super.call(this, name) || this;
        _this.yearsKnown = yearsKnown;
        return _this;
    }
    Friend.prototype.timeknow = function () {
        console.log("We have been friend for " + this.yearsKnown + " years.");
    };
    return Friend;
}(Person));
var friendA = new Friend("Jacob", 8);
friendA.introduceSelf();
friendA.timeknow();
