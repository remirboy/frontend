function sum(x:number,y:number): number
function sum(x:string,y:string): string
function sum(x:any,y:any): any{
    if (typeof x==='number' && typeof y ==='number'){
        return x+y;
    } else if (typeof x==='string' && typeof y ==='string'){
        return `${x} ${y}`
    }
}

console.log(sum(2,2))
console.log(sum('2','as'))
