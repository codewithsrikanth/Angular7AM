var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(EmpID, EName, Salary) {
        this.empID = EmpID;
        this.eName = EName;
        this.salary = Salary;
    }
    Employee.prototype.display = function () {
        console.log("EmpID:" + this.empID + ", Name: " + this.eName + ", Basic Salary: " + this.salary);
    };
    return Employee;
}());
var Technical = /** @class */ (function (_super) {
    __extends(Technical, _super);
    function Technical(EmpID, EName, Salary, subject) {
        var _this = _super.call(this, EmpID, EName, Salary) || this;
        _this.subject = subject;
        return _this;
    }
    Technical.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(" Subject is: " + this.subject);
    };
    return Technical;
}(Employee));
var techEmp = new Technical(102, 'Diyansh', 23456, 'Typescript');
techEmp.display();
