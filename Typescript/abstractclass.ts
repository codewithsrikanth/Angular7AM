abstract class Employee{

    protected empID:number;
    protected eName:string;
    protected basicSalary:number;

    constructor(EmpID:number,EName:string,Salary:number){
        this.empID = EmpID;
        this.eName= EName;
        this.basicSalary = Salary;
    }

    abstract calSalary(hrs:number):void;

    display(){
        console.log("EmpID:"+this.empID+", Name: "+this.eName+", Basic Salary: "+this.basicSalary);
    }
}
class Techical extends Employee{
    subject:string;

    calSalary(hrs:number):void{
        let salary:number;
        salary = this.basicSalary * hrs +(this.basicSalary *hrs)*2.5/100;
        console.log('Technical Emp Salary: '+salary);
    }

    constructor(EmpID:number,EName:string,Salary:number,Subject:string){
        super(EmpID,EName,Salary);
        this.subject = Subject;
    }

    display(){
        super.display();
        console.log("Subject: "+this.subject);
    }
}

class Admin extends Employee{
    batchName:string;

    calSalary(hrs:number):void{
        let salary:number;
        salary = this.basicSalary * hrs +(this.basicSalary *hrs)*1.5/100;
        console.log('Admin Emp Salary: '+salary);
    }

    constructor(EmpID:number,EName:string,Salary:number,BatchName:string){
        super(EmpID,EName,Salary);
        this.batchName = BatchName;
    }

    display(){
        super.display();
        console.log("Batch Name: "+this.batchName);
    }
}

function F1(x:string){
    let emp:Employee;
    if(x == "Tech"){
    emp = new Techical(101,'Srikanth',25000,'Angular10');
    }
    else if(x == "NonTech"){
    emp = new Admin(102,'Ramesh',12000,'Javascript');
    }
    emp.display();
    emp.calSalary(15);
}

F1("NonTech");





