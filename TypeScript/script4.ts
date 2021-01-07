namespace Cars{
    export abstract class Car {
    
        private name:string

        constructor(name:string) {
            this.name=name
        }
    }

    export namespace LADA{
        
        export class Samara extends Cars.Car{

            private transmission:string

            constructor(transmission:string,name:string) {
                super(name)
                this.transmission=transmission
            }

            sayTrans():string{
                return this.transmission
            }

        }
        export class Classic extends Cars.Car{

            private transmission:string

            constructor(transmission:string,name:string) {
                super(name)
                this.transmission=transmission
            }

            sayTrans():string{
                return this.transmission
            }
     
        }
    }
}

const sam = new Cars.LADA.Samara('fr',`VAZ 2109`)
console.log(sam.sayTrans())