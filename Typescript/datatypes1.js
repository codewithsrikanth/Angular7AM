//Normal types
var eno = 101;
var ename = 'Srikanth';
var salary = 12000;
var isActive = true;
//Complex types
var empIds = [101, 102, 103, 104];
var eNames = ['Srikanth', 'Sai', 'Diyansh', 'Naresh', 'Scott', 'Jhon'];
var contacts = ['969696969', 123, '56985478', true, [12, 36, 45], { x: 101, y: 201 }];
//for..in   :   index
// for(let x in empIds){
//     console.log(empIds[x]);
// }
//for .. of :   value
for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
    var x = contacts_1[_i];
    console.log(x);
}
//let employee:string = "Eno is: "+eno+
// "Ename is: "+ename+
// " Salary is: "+salary+
// " and Status is:"+isActive;
var employee = "\nEno is: " + eno + "\nEname is: " + ename + "\nSalary is: " + salary + "\nActive status is: " + isActive + "\n";
// console.log(employee);
// console.log(empIds);
// console.log(eNames);
