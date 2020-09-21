class Address{
    doorNo:number;
    city:string;
    state:string;
    country:string;

    constructor(doorNo:number,city:string,state:string,country:string){
        this.doorNo = doorNo;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}

//class in TS
class Customer{
    //Properties
    custId:number;
    custName:string;
    custBal:number;
    custAddress:Address;
    //Constructor
    constructor(Id:number,Name:string,Bal:number,custAddress?:Address){
        this.custId = Id;
        this.custName = Name;
        this.custBal = Bal;
        this.custAddress = custAddress;
    }
    //Method
    Display(){
        let x:string = `
            Customer ID is:${this.custId}
            Customer Name is: ${this.custName}
            Customer Balenece is: ${this.custBal}
            Customer Address: ${this.custAddress.city}, ${this.custAddress.state}
        `;
        console.log(x);
    }
}
//Object and passing arguments to the constructor
let address:Address = new Address(101,'Hyderabad','TS','India') ;
let cust:Customer = new Customer(101,'Srikanth',12345);
cust.Display();




