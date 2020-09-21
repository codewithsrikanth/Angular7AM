class Employee{
    protected empID:number;
    protected eName:string;
    protected salary:number;

    constructor(EmpID:number,EName:string,Salary:number){
        this.empID = EmpID;
        this.eName= EName;
        this.salary = Salary;
    }

    display(){
        console.log("EmpID:"+this.empID+", Name: "+this.eName+", Basic Salary: "+this.salary);
    }
}

class Technical extends Employee
{
    subject:string;
    constructor(EmpID:number,EName:string,Salary:number,subject:string){
        super(EmpID,EName,Salary);        
        this.subject = subject;
    }
    display(){
        super.display();
        console.log(" Subject is: "+this.subject);
    }
}

var techEmp = new Technical(102,'Diyansh',23456,'Typescript');
techEmp.display();

