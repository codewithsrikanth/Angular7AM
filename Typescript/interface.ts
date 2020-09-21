interface IArthematic{
    Add(x:number,y:number):void;
    Sub(x:number,y:number):void;
}

class Arthematic implements IArthematic{
    Add(x: number,y:number): void {
        console.log("Addition is: "+(x+y))
    }
    Sub(x: number, y: number): void {
        console.log("Subtraction is: "+(x-y))
    }
}

let res:IArthematic;

res = new Arthematic();
res.Add(100,200);
res.Sub(100,50);
