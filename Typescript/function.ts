enum Result {Pass=1,Fail=-1,Promoted=0};

function Student(){
    let sId:number = 101;
    let sName:string = "Srikanth Rallabandi";
    let sStatus:boolean = true;

    let sMarks: Array<number> = [45,65,57];
    let total:number = 0;

    for(let m of sMarks){
        total += m;
    }

    function display(){
        console.log(sId);
        console.log(sName);
        console.log(arDOB);
    }

    let Avg = total/3;

    let arContacts:string[] = ['98989898','8585858585'];
    let arDOB:[number,string,number] = [22,'Jul',1990];

    let eResult:Result = Result.Pass;

    this.eResult = function(){
        if(Avg>=35){
            return Result.Pass;
        }
        else{
            return Result.Fail;
        }
    }
 }

 var std = new Student();
 std.display();
 console.log(std.eResult());              //value
 console.log(Result[std.eResult()]);    //constant
