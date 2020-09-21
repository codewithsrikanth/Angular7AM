var Address = /** @class */ (function () {
    function Address(doorNo, city, state, country) {
        this.doorNo = doorNo;
        this.city = city;
        this.state = state;
        this.country = country;
    }
    return Address;
}());
//class in TS
var Customer = /** @class */ (function () {
    //Constructor
    function Customer(Id, Name, Bal, custAddress) {
        this.custId = Id;
        this.custName = Name;
        this.custBal = Bal;
        this.custAddress = custAddress;
    }
    //Method
    Customer.prototype.Display = function () {
        var x = "\n            Customer ID is:" + this.custId + "\n            Customer Name is: " + this.custName + "\n            Customer Balenece is: " + this.custBal + "\n            Customer Address: " + this.custAddress.city + ", " + this.custAddress.state + "\n        ";
        console.log(x);
    };
    return Customer;
}());
//Object and passing arguments to the constructor
var address = new Address(101, 'Hyderabad', 'TS', 'India');
var cust = new Customer(101, 'Srikanth', 12345, address);
cust.Display();
