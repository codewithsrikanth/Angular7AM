// function F1(){
//     var marks:number = 30;
//     var result:string = "pass";
//     if(marks<35){
//         var result:string = "fail";
//         console.log('Inside condition result value is: '+result);
//     }
//     console.log('Outside condition block and inside function result value is: '+result);
// }
function F1() {
    var marks = 30;
    var result = "pass";
    if (marks < 35) {
        var result_1 = "fail";
        console.log('Inside condition result value is: ' + result_1);
    }
    console.log('Outside condition block and inside function result value is: ' + result);
}
F1();
