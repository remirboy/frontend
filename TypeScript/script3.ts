//OOP

interface IPerson{
    name: string
    age: number
    sayHello(): string
}

interface IClient extends IPerson{
    buy(price:number):number
}

class Person {
    name: string
    age: number

    constructor(name:string, age:number){
        this.name=name
        this.age=age
    }

    sayHello(): string{
        return `Hello, I'm ${this.name}`
    }
}

class Employee extends Person implements IPerson{
    
    experience: number

    constructor(name:string, age:number,experience: number){
        super(name,age)
        this.experience=experience
    }
    
    sayHello(): string{
        const name:string = super.sayHello()
        return `How can I help you?`
    }
}

class Client extends Person implements IPerson,IClient{
    
    money: number

    constructor(name:string, age:number, money: number){
        super(name,age)
        this.money=money
    }
    
    sayHello(): string{
        const name:string = super.sayHello()
        return `Thank you`
    }

    buy(price:number){
        return this.money= this.money-price
    }

}