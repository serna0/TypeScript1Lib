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
    function Person(theName, theAge) {
        this.name = theName;
        this.age = theAge;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hi, I am" + this.name + "!");
    };
    return Person;
}());
var Friend = /** @class */ (function (_super) {
    __extends(Friend, _super);
    function Friend(name, age, yearsKnown) {
        var _this = _super.call(this, name, age) || this;
        _this.yearsKnown = yearsKnown;
        return _this;
    }
    Friend.prototype.thimeKnow = function () {
        console.log("asdasdasda" + this.yearsKnown + "years");
    };
    Friend.prototype.friendSience = function () {
        var firstAge = this.age - this.yearsKnown;
        console.log("asdasdad " + firstAge);
    };
    return Friend;
}(Person));
var FriendA = new Friend("William", 19, 8);
FriendA.friendSience();
