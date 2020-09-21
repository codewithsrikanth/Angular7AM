var Arthematic = /** @class */ (function () {
    function Arthematic() {
    }
    Arthematic.prototype.Add = function (x, y) {
        console.log("Addition is: " + (x + y));
    };
    Arthematic.prototype.Sub = function (x, y) {
        console.log("Subtraction is: " + (x - y));
    };
    return Arthematic;
}());
var res;
res = new Arthematic();
res.Add(100, 200);
res.Sub(100, 50);
