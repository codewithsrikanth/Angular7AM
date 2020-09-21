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
        this.basicSalary = Salary;
    }
    Employee.prototype.display = function () {
        console.log("EmpID:" + this.empID + ", Name: " + this.eName + ", Basic Salary: " + this.basicSalary);
    };
    return Employee;
}());
var Techical = /** @class */ (function (_super) {
    __extends(Techical, _super);
    function Techical(EmpID, EName, Salary, Subject) {
        var _this = _super.call(this, EmpID, EName, Salary) || this;
        _this.subject = Subject;
        return _this;
    }
    Techical.prototype.calSalary = function (hrs) {
        var salary;
        salary = this.basicSalary * hrs + (this.basicSalary * hrs) * 2.5 / 100;
        console.log('Technical Emp Salary: ' + salary);
    };
    Techical.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Subject: " + this.subject);
    };
    return Techical;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(EmpID, EName, Salary, BatchName) {
        var _this = _super.call(this, EmpID, EName, Salary) || this;
        _this.batchName = BatchName;
        return _this;
    }
    Admin.prototype.calSalary = function (hrs) {
        var salary;
        salary = this.basicSalary * hrs + (this.basicSalary * hrs) * 1.5 / 100;
        console.log('Admin Emp Salary: ' + salary);
    };
    Admin.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Batch Name: " + this.batchName);
    };
    return Admin;
}(Employee));
function F1(x) {
    var emp;
    if (x == "Tech") {
        emp = new Techical(101, 'Srikanth', 25000, 'Angular10');
    }
    else if (x == "NonTech") {
        emp = new Admin(102, 'Ramesh', 12000, 'Javascript');
    }
    emp.display();
    emp.calSalary(15);
}
F1("NonTech");
