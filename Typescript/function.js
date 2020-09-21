var Result;
(function (Result) {
    Result[Result["Pass"] = 1] = "Pass";
    Result[Result["Fail"] = -1] = "Fail";
    Result[Result["Promoted"] = 0] = "Promoted";
})(Result || (Result = {}));
;
function Student() {
    var sId = 101;
    var sName = "Srikanth Rallabandi";
    var sStatus = true;
    var sMarks = [45, 65, 57];
    var total = 0;
    for (var _i = 0, sMarks_1 = sMarks; _i < sMarks_1.length; _i++) {
        var m = sMarks_1[_i];
        total += m;
    }
    function display() {
        console.log(sId);
        console.log(sName);
        console.log(arDOB);
    }
    var Avg = total / 3;
    var arContacts = ['98989898', '8585858585'];
    var arDOB = [22, 'Jul', 1990];
    var eResult = Result.Pass;
    this.eResult = function () {
        if (Avg >= 35) {
            return Result.Pass;
        }
        else {
            return Result.Fail;
        }
    };
}
var std = new Student();
std.display();
console.log(std.eResult()); //value
console.log(Result[std.eResult()]); //constant
