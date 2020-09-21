//Normal types
let eno:number = 101;
let ename:string = 'Srikanth';
let salary:number = 12000;
let isActive:boolean = true;

//Complex types
let empIds:number[] = [101,102,103,104];
let eNames:Array<string> = ['Srikanth','Sai','Diyansh','Naresh','Scott','Jhon'];
let contacts:any = ['969696969',123,'56985478',true,[12,36,45],{x:101,y:201}];

//tuple
let DOB:[number,string,number] = [22,'Jul',1990];

//Enumerations
enum weekDays{
    Sun=1212,Mon=2541,Thus=5241,Fri=8547
}

let today = weekDays.Fri




//for..in   :   index
// for(let x in empIds){
//     console.log(empIds[x]);
// }
//for .. of :   value
for(let x of contacts){
    console.log(x);
}


//let employee:string = "Eno is: "+eno+
// "Ename is: "+ename+
// " Salary is: "+salary+
// " and Status is:"+isActive;

let employee:string = `
Eno is: ${eno}
Ename is: ${ename}
Salary is: ${salary}
Active status is: ${isActive}
`;

// console.log(employee);
// console.log(empIds);
// console.log(eNames);
